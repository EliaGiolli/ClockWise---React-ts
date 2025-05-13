import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaAddressBook, FaRocket } from "react-icons/fa";
import { useThemeStore } from "../store/store";
import { FooterProps } from "../types/genericTypes";

function Footer({ className }: FooterProps) {
  const initialTheme = useThemeStore(state => state.initialTheme);

  return (
    <footer className={`flex justify-around items-center p-4 ${initialTheme === 'light' ? 'bg-gray-800 text-white shadow-gray-950' : 'bg-gray-900 text-gray-200 shadow-gray-500'} shadow-md ${className}`}>
      <Link to="/" className="flex flex-col items-center">
        <FaHome className={`${initialTheme==='light'?'hover:text-blue-600':'hover:text-blue-300'} text-2xl`} />
        <span>Homepage</span>
      </Link>
      <Link to="/about" className="flex flex-col items-center">
        <FaInfoCircle className={`${initialTheme==='light'?'hover:text-blue-600':'hover:text-blue-300'} text-2xl`} />
        <span>Su di noi</span>
      </Link>
      <Link to="/contact" className="flex flex-col items-center">
        <FaRocket className={`${initialTheme==='light'?'hover:text-blue-600':'hover:text-blue-300'} text-2xl`} />
        <span>Funzionalità</span>
      </Link>
      <Link to="/contact" className="flex flex-col items-center">
        <FaAddressBook className={`${initialTheme==='light'?'hover:text-blue-600':'hover:text-blue-300'} text-2xl`} />
        <span>Contatti</span>
      </Link>
    </footer>
  );
}

export default Footer;
