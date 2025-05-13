import {useState} from "react";
import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import ModalCard from "./ModalCard";
//internal imports
import { WorkLogEntry } from "../types/workLogTypes"; 
import { useThemeStore } from "../store/store";
import { useAddEntry } from "../custom hooks/useAddEntry";
//External Libraries
import { IoGitNetworkOutline } from "react-icons/io5";
import { Element } from "react-scroll";
import { motion } from 'framer-motion'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';


function WorkLogTable() {

  const { data,addEntry }= useAddEntry();

  const initialTheme = useThemeStore(state => state.initialTheme);

  const [isOpen, setIsOpen] = useState(false);

  const columns = React.useMemo(
    //the new Tanstack React-table API uses accessorKey and header instead of accessor and Header inside the columns
    () => [
      {
        header: 'Data',
        accessorKey: 'date',
      },
      {
        header: 'Ore',
        accessorKey: 'hours',
      },
      {
        header: 'Attività',
        accessorKey: 'activity',
      },
    ],
    []
  );

  const table = useReactTable({
    //now it uses the updated state from the custom hook
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleAddEntry = (entry: WorkLogEntry) => {
    addEntry(entry);  // it adds a new entry and saves it into the local storage
    setIsOpen(false);  
  };

  return (
    <>
      <Element name="working-log-table">
        <Card className={`${initialTheme === 'light'?'bg-white shadow-gray-900':'bg-gray-900 shadow-gray-200'} w-full max-w-2xl p-8 rounded-lg shadow-lg mx-auto`}>
            <div className='flex justify-between items-center px-3 mb-10'>
              <h2 className={`text-2xl md:text-3xl ${initialTheme ==='light'?'text-blue-900':'text-blue-500'} capitalize`}>Tabella Presenze</h2>
              <IoGitNetworkOutline  className={`${initialTheme === 'light'?'text-blue-600 hover:text-blue-900':'text-blue-300 hover:text-blue-500'} text-2xl`} />
            </div>
          <motion.table
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id} className="p-2 border-b">
                      {/* The new API uses flexRender to dynamically render the header*/}
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="mb-10">
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="p-2 border-b">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </motion.table>
          <div className="flex justify-center mt-4">
            <Button 
              variant="customBtn" 
              onClick={() => {setIsOpen(true)}}
              className="px-4 py-2 text-lg"
            >
              Aggiungi le tue presenze
            </Button>
          </div>
        </Card>
      </Element>
      {
        isOpen && <ModalCard 
                  table={table}
                  isOpen={isOpen}
                  closeModal={() => setIsOpen(false)}
                  onSubmit={handleAddEntry} 
                  />
      }
    </>
  );
}

export default WorkLogTable;
