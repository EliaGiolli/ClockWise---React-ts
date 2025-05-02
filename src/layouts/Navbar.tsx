import { useState } from "react"
import {Link} from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import Sidebar from "./Sidebar";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
    <nav className="bg-white w-full min-h-20 flex justify-around items-center text-center border-b-2 border-b-gray-200 shadow-md
     shadow-gray-500 relative">
        <Link to='/' className="uppercase font-bold text-2xl md:text-3xl text-gray-900">ClockWise</Link>
        <ul className="md:flex gap-4 hidden">
            <li>
                <Link to='/about'>Chi siamo</Link>
            </li>
            <li>
                <Link to='/products'>Funzionalità</Link>
            </li>
            <li>
                <Link to='/'>Contatti</Link>
            </li>
        </ul>
        <button onClick={toggleNav} className="block md:hidden">
            {isOpen ? <RxCross1 size={35} className="bg-blue-600 text-white hover:bg-blue-700 px-2 rounded-lg"/> 
            : 
            <GiHamburgerMenu size={35} className="bg-blue-600 text-white hover:bg-blue-700 px-2 rounded-lg"/>}
        </button>
        {
            isOpen && (
                <div className="bg-white flex flex-col justify-center items-center text-center w-full 
                    absolute top-full right-0 z-50 p-8 border-t-2 border-t-gray-200 shadow-lg shadow-gray-500">
                    <ul className="flex flex-col items-center text-center gap-4">
                        <li className="textl-xl md:text-lg px-4 hover:bg-amber-500 hover:text-white hover:rounded-md">
                            <Link to='/about'>Chi siamo</Link>
                        </li>
                        <li className="textl-xl md:text-lg px-4 hover:bg-amber-500 hover:text-white hover:rounded-md">
                            <Link to='/products'>Funzionalità</Link>
                        </li>
                        <li className="textl-xl md:text-lg px-4 hover:bg-amber-500 hover:text-white hover:rounded-md">
                            <Link to='/'>Contatti</Link>
                        </li>
                    </ul>
                </div>
            )
        }
       
    </nav>
    <Sidebar />
    </>
  )
}

export default Navbar