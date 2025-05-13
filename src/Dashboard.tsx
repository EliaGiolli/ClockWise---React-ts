import Charts from "./layouts/Charts";
import Navbar from "./layouts/Navbar"
import TimeSummary from "./layouts/TimeSummary"
import WorkLogTable from "./layouts/WorkLogTable";
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";

import { useThemeStore } from "./store/store"



function Dashboard() {
   
  const initialTheme = useThemeStore(state => state.initialTheme);

  return (
    <>
      <Navbar />
      <main className={`${initialTheme === 'light'?'bg-gray-200 text-gray-900':'bg-gray-700 text-white'} flex flex-col w-full min-h-screen p-4 pb-20`}>
        <div className="flex flex-row flex-1">
          <Sidebar />
          {/* flex-1 and overflow-auto allow the main content to scroll indipendently of the sidebar */}
          <div className="flex-1 overflow-auto">
            <TimeSummary />
            <Charts />
            <WorkLogTable />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Dashboard
