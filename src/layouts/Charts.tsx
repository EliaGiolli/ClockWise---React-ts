//external libraries
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, AreaChart,Area, Tooltip } from 'recharts'
import { Element } from 'react-scroll'
import { motion } from 'motion/react'

//internal imports
import { weeklySummary,monthlyHours } from "../data/timeData"
import { useThemeStore } from '../store/store'

function Charts() {
    const initialTheme = useThemeStore(state => state.initialTheme);

    
      
  return (
    <Element name='chartsOverview'>
        <motion.section className="bg-inherit min-h-screen flex flex-col p-8 my-10">
            <h2 className={`${initialTheme==='light'?'text-blue-900':'text-blue-500'} text-2xl md:text-3xl uppercase mx-auto p-5`}>Grafici per le presenze</h2>
            <ResponsiveContainer width="50%" height={300}className={`${initialTheme==='light'?'bg-white shadow-gray-900':'bg-gray-900 shadow-gray-200'} mx-auto shadow-lg rounded-lg p-4`}>
                <LineChart
                    width={300}
                    height={300}
                    data={weeklySummary}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Line type="monotone" dataKey="hours" stroke="#8884d8" isAnimationActive={true} animationDuration={1000} />
                    <XAxis dataKey="day" />
                    <YAxis dataKey="hours"/>
                    <Tooltip/>
                   
                </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="50%" height={300} className={`${initialTheme==='light'?'bg-white shadow-gray-900':'bg-gray-900 shadow-gray-200'} mx-auto shadow-lg rounded-lg p-5 mt-10`}>
                <AreaChart data={monthlyHours}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="hours"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="hours" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>

        </motion.section>
    </Element>
  )
}

export default Charts