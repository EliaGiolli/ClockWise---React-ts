import SummaryCards from "../layouts/SummaryCards";
import FeatureTabs from "../layouts/FeatureTabs";
import { useThemeStore } from "../store/store";

import { motion } from 'motion/react'

function AboutPage() {

  const initialTheme = useThemeStore((state) => state.initialTheme);

  return (
    <main>
     <section className="flex flex-col w-full min-h-screen p-4 pb-20 mt-10">
      <div className="text-center mb-12">
          <h1 className={`${initialTheme === 'light'?'text-blue-900':' text-blue-500'} text-4xl font-bold mb-4`}>Benvenuto in ClockWise</h1>
          <p className={`${initialTheme === 'light'?'text-gray-600':' text-gray-200'} text-lg max-w-3xl mx-auto`}>
            ClockWise è la soluzione moderna per la gestione delle ore lavorative, l’analisi dei dati settimanali e mensili, e la registrazione precisa delle attività aziendali.
          </p>
        </div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8"
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:0.6}}
        >
        <SummaryCards />
      </motion.div>
    </section>
    <section className="flex flex-col w-full min-h-screen p-4 pb-20">
      <div className="text-center mb-5">
          <h2 className={`${initialTheme === 'light'?'text-blue-900':' text-blue-500'} text-4xl font-bold mb-4`}>Timbratura smart in sede e da remoto</h2>
          <p className={`${initialTheme === 'light'?'text-gray-600':' text-gray-200'} text-lg max-w-3xl mx-auto`}>
          Gestione presenze per smart working e lavoro in sede
          </p>
      </div>

      <FeatureTabs />
    </section>
    </main>
  )
}

export default AboutPage