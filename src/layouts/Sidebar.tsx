import { Link as ScrollLink } from 'react-scroll'
import { useThemeStore } from '../store/store'

function Sidebar() {
  const initialTheme = useThemeStore(state => state.initialTheme);

  return (
    <nav
      className={`
        ${initialTheme === 'light' ? 'bg-white border-r-gray-200 shadow-gray-500' : 'bg-gray-900 border-r-gray-200 text-gray-200 shadow-gray-200'}
        hidden md:flex flex-col justify-start items-center w-64 h-screen sticky top-0 z-40 p-8 border-r-2 rounded-md shadow-md
      `}
    >
      <ul className="flex flex-col items-center gap-y-8 w-full">
        {[
          { to: 'timeSummary', label: 'Tabella orario' },
          { to: 'chartsOverview', label: 'Grafico Presenze' },
          { to: 'working-log-table', label: 'Tabella Turni' },
        ].map(({ to, label }) => (
          <li
            key={to}
            className={`w-full text-center text-lg md:text-xl hover:rounded-lg px-2 py-1 cursor-pointer
              ${initialTheme === 'light'
                ? 'hover:bg-blue-900 hover:text-white'
                : 'hover:bg-blue-300 hover:text-gray-900'}
            `}
          >
            <ScrollLink to={to} smooth={true} duration={500} offset={-80}>
              {label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
