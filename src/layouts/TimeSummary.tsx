//external libraries
import { motion } from 'motion/react'
import { Element } from 'react-scroll'
import { FaRegClock } from "react-icons/fa";
//internal files
import { weeklySummary, monthlyHours } from "../data/timeData"
import { useThemeStore } from '../store/store';

import Card from "../components/Card"

function TimeSummary() {

    const totalWeeklyHours = weeklySummary.reduce((acc, day) => acc + day.hours, 0);

    const initialTheme = useThemeStore(state => state.initialTheme);
    
  return (
    <Element name='timeSummary'>
        <Card className={`${initialTheme === 'light'?'bg-white shadow-gray-900':'bg-gray-900 shadow-gray-200'} w-full max-w-2xl p-8 rounded-lg shadow-lg mx-auto`}>
            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.6}}
            >
                <div className='flex justify-between items-center px-3'>
                    <h2 className={`text-2xl md:text-3xl ${initialTheme ==='light'?'text-blue-900':'text-blue-500'} capitalize`}>Tabella orario</h2>
                    <FaRegClock  className={`${initialTheme === 'light'?'text-blue-600 hover:text-blue-900':'text-blue-300 hover:text-blue-500'} text-2xl`} />
                </div>
                <div className={`${initialTheme === 'light'?'text-gray-700':'text-gray-200'} grid grid-cols-2 gap-4`}>
                    {weeklySummary.map((item) => (
                    <div key={item.day} className="flex justify-between border-b py-2">
                        <span>{item.day}</span>
                        <span>{item.hours}h</span>
                    </div>
                    ))}
                </div>
                <div className={`${initialTheme === 'light'?'text-blue-900':'text-blue-600'} mt-6 text-lg font-semibold`}>
                    Totale settimana: {totalWeeklyHours}h
                </div>
                <div className={`${initialTheme ==='light'?'text-gray-500':'text-gray-400'} text-sm`}>Ore mese: {monthlyHours}h</div>
            </motion.div>
        </Card>
    </Element>
  )
}

export default TimeSummary