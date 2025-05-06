//external libraries
import { motion } from 'motion/react'
import { Element } from 'react-scroll'
import { FaRegClock } from "react-icons/fa";
//internal files
import { weeklySummary, monthlyHours } from "../data/timeData"

import Card from "../components/Card"

function TimeSummary() {

    const totalWeeklyHours = weeklySummary.reduce((acc, day) => acc + day.hours, 0);

  return (
    <Element name='timeSummary'>
        <Card className='bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg shadow-gray-900 mx-auto'>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.6}}
            >
                <div className='flex justify-between items-center px-3'>
                    <h2 className='text-2xl md:text-3xl text-blue-900 capitalize'>Tabella orario</h2>
                    <FaRegClock  className="text-blue-600 text-2xl animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-200">
                    {weeklySummary.map((item) => (
                    <div key={item.day} className="flex justify-between border-b py-2">
                        <span>{item.day}</span>
                        <span>{item.hours}h</span>
                    </div>
                    ))}
                </div>
                <div className="mt-6 text-lg font-semibold text-blue-800 dark:text-amber-300">
                    Totale settimana: {totalWeeklyHours}h
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Ore mese: {monthlyHours}h</div>
            </motion.div>
        </Card>
    </Element>
  )
}

export default TimeSummary