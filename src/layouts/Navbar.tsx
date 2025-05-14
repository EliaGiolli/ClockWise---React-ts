import { useState } from "react"
import { Link } from 'react-router-dom'
import { useThemeStore } from "../store/store";

//REACT-ICONS
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { CiLight } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";


import Button from "../components/Button";

function Navbar() {
    // Mobile menu logic
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }
    //Theme logic
    const initialTheme = useThemeStore(state => state.initialTheme);
    const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <>
    <nav className={`${initialTheme === 'light' ? 'bg-white border-b-gray-200 shadow-gray-500' : 'bg-gray-900 text-gray-100 border-b-gray-950 shadow-gray-200'} 
        w-full min-h-20 flex justify-around items-center text-center border-b-2  shadow-md relative`}>
        {/* DESKTOP NAV */}
        <Link to='/' className={`uppercase font-bold text-2xl md:text-3xl ${initialTheme === 'light' ? 'text-gray-900': 'text-gray-200'}`}>ClockWise</Link>
        <ul className="md:flex gap-4 hidden">
            <li className={`textl-xl md:text-lg px-4 ${initialTheme ==='light' ? 'hover:bg-blue-900 hover:text-white':'hover:bg-blue-300 hover:text-gray-900'} hover:rounded-md`}>
                <Link to='/'>Chi siamo</Link>
            </li>
            <li className={`textl-xl md:text-lg px-4 ${initialTheme ==='light' ? 'hover:bg-blue-900 hover:text-white':'hover:bg-blue-300 hover:text-gray-900'} hover:rounded-md`}>
                <Link to='/products'>Il nostro prodotto</Link>
            </li>
            <li className={`textl-xl md:text-lg px-4 ${initialTheme ==='light' ? 'hover:bg-blue-900 hover:text-white':'hover:bg-blue-300 hover:text-gray-900'} hover:rounded-md`}>
                <Link to='/contacts'>Contatti</Link>
            </li>
        </ul>

        {/* THEME BUTTON */}
        <Button onClick={toggleTheme} variant="default">
            {initialTheme === 'light' ? <CiLight size={35} className="bg-gray-700 hover:bg-gray-900 text-white px-2 rounded-lg"/> 
            : 
            <LuSunMoon size={35} className="bg-white text-gray-900 hover:bg-gray-300 px-2 border-2 rounded-lg" />}
        </Button>

        {/* HAMBURGER-MENU BUTTON */}
        <Button onClick={toggleNav} variant='hamburgerBtn'>
            {isOpen ? <RxCross1 size={35} className="bg-blue-600 text-white hover:bg-blue-700 px-2 rounded-lg"/> 
            : 
            <GiHamburgerMenu size={35} className="bg-blue-600 text-white hover:bg-blue-700 px-2 rounded-lg"/>}
        </Button>

        {/* MOBILE NAV */}
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
                            <Link to='/contacts'>Contatti</Link>
                        </li>
                    </ul>
                </div>
            )
        }
       
    </nav>
    </>
  )
}

export default Navbar