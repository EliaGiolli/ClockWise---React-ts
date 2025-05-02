import { Link as ScrollLink } from 'react-scroll'

function Sidebar() {
  return (
    <nav className="hidden md:flex flex-col justify-center items-center max-w-1/3 min-h-screen bg-white absolute z-50 p-8 border-r-2 border-r-gray-200">
        <ul className='flex flex-col center items-center text-center gap-y-8'>
            <li className='text-lg md:text-xl text-gray-900 hover:bg-amber-500 hover:text-white hover:rounded-lg px-2 py-1'>
                <ScrollLink to='/' smooth={true} duration={500}>Tabella orario</ScrollLink>
            </li>
            <li className='text-lg md:text-xl text-gray-900 hover:bg-amber-500 hover:text-white hover:rounded-lg px-2 py-1'>
                <ScrollLink to='/' smooth={true} duration={500}>Grafico Presenze</ScrollLink>
            </li>
            <li className='text-lg md:text-xl text-gray-900 hover:bg-amber-500 hover:text-white hover:rounded-lg px-2 py-1'>
                <ScrollLink to='/' smooth={true} duration={500}>Tabella Turni</ScrollLink>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar