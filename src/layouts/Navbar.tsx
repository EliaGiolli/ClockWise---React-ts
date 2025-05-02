import { useState } from "react"
import {Link} from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav =()=>{
        setIsOpen(!isOpen);
    }
  return (
    <nav className="bg-gray-50 w-full min-h-20 flex justify-around items-center text-center">
        <Link to='/' className="uppercase font-bold text-2xl md:text-3xl text-gray-900">ClockWise</Link>
        <ul className="flex gap-4">
            <li>
                <Link to='/about'>Chi siamo</Link>
            </li>
            <li>
                <Link to='/'>Funzionalità</Link>
            </li>
            <li>
                <Link to='/'>Contatti</Link>
            </li>
        </ul>
        <button onClick={toggleNav}>
            {isOpen ? <GiHamburgerMenu size={24} className="bg-blue-600 text-white hover:bg-blue-700"/> 
            : 
            <RxCross1 size={24} className="bg-blue-600 text-white hover:bg-blue-700"/>}
        </button>
    </nav>
  )
}

export default Navbar