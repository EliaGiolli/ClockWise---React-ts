import { Link as ScrollLink } from 'react-scroll'
import { useThemeStore } from '../store/store'

function Sidebar() {
    //theme
    const initialTheme = useThemeStore(state => state.initialTheme);
   

  return (
    <nav className={`${initialTheme === 'light' ? 'bg-white border-r-gray-200' : 'bg-gray-900 border-r-gray-200'}
        hidden md:flex flex-col justify-center items-center max-w-1/3 min-h-screen absolute z-50 p-8 border-r-2`}>
        <ul className='flex flex-col center items-center text-center gap-y-8'>
            <li className={`${initialTheme === 'light'? 'text-gray-900 hover:bg-amber-500 hover:text-white': 'text-gray-200 hover:bg-blue-700 hover:text-gray-200'}
                text-lg md:text-xl hover:rounded-lg px-2 py-1`}>
                <ScrollLink to='timeSummary' smooth={true} duration={500}>Tabella orario</ScrollLink>
            </li>
            <li className={`${initialTheme === 'light'? 'text-gray-900 hover:bg-amber-500 hover:text-white': 'text-gray-200 hover:bg-blue-700 hover:text-gray-200'}
                text-lg md:text-xl hover:rounded-lg px-2 py-1`}>
                <ScrollLink to='/' smooth={true} duration={500}>Grafico Presenze</ScrollLink>
            </li>
            <li className={`${initialTheme === 'light'? 'text-gray-900 hover:bg-amber-500 hover:text-white': 'text-gray-200 hover:bg-blue-700 hover:text-gray-200'}
                text-lg md:text-xl hover:rounded-lg px-2 py-1`}>
                <ScrollLink to='/' smooth={true} duration={500}>Tabella Turni</ScrollLink>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar