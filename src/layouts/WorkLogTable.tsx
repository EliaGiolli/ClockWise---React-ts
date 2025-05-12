import React from "react";
import Card from "../components/Card";
//internal imports
import { workLogData } from "../data/workLog"
import { useThemeStore } from "../store/store";
//External Libraries
import { IoGitNetworkOutline } from "react-icons/io5";
import { Element } from "react-scroll";
import { motion } from 'framer-motion'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

function WorkLogTable() {
  const initialTheme = useThemeStore(state => state.initialTheme);
  const columns = React.useMemo(
    //the new Tanstack React-table API uses accessorKey and header instead of accessor and Header inside the columns
    () => [
      {
        header: 'Date',
        accessorKey: 'date',
      },
      {
        header: 'Hours',
        accessorKey: 'hours',
      },
      {
        header: 'Activity',
        accessorKey: 'activity',
      },
    ],
    []
  );

  const table = useReactTable({
    data: workLogData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
          <tbody>
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
      </Card>
    </Element>
  );
}

export default WorkLogTable;
