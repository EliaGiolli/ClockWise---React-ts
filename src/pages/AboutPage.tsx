
import { useThemeStore } from "../store/store"

function AboutPage() {
    const initialTheme = useThemeStore(state => state.initialTheme);
  return (
    <>
      <main className={`${initialTheme === 'light'?'bg-gray-200 text-gray-900':'bg-gray-700 text-white'} flex flex-col w-full min-h-screen p-4 pb-20`}>

      </main>
      
    </>
  )
}

export default AboutPage