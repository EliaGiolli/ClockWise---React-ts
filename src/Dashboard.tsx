import Navbar from "./layouts/Navbar"
import TimeSummary from "./layouts/TimeSummary"

function Dashboard() {
  
  return (
    <>
      <Navbar />
      <main className="bg-gray-200 text-gray-900 flex flex-col w-full min-h-screen p-4">
          <TimeSummary />
      </main>
    </>
  )
}

export default Dashboard
