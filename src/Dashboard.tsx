import Charts from "./layouts/Charts";
import Navbar from "./layouts/Navbar"
import TimeSummary from "./layouts/TimeSummary"
import WorkLogTable from "./layouts/WorkLogTable";

import { useThemeStore } from "./store/store"


function Dashboard() {
   
  const initialTheme = useThemeStore(state => state.initialTheme);

  return (
    <>
      <Navbar />
      <main className={`${initialTheme === 'light'?'bg-gray-200 text-gray-900':'bg-gray-700 text-white'} flex flex-col w-full min-h-screen p-4`}>
          <TimeSummary />
          <Charts />
          <WorkLogTable />
      </main>
    </>
  )
}

export default Dashboard
