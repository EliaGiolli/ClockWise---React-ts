import { useThemeStore } from "../store/store";

import Card from "../components/Card";

import { Briefcase, BarChart3, ClipboardList } from "lucide-react";

function SummaryCards() {

    const initialTheme = useThemeStore((state) => state.initialTheme);

  return (
   <>
     {/* Box 1 */}
     <Card variant="summaryCard">
          <Briefcase className={`${initialTheme === 'light'?'text-blue-500 hover:text-blue-900':'text-blue-300 hover:text-blue-500'} w-12 h-12 mx-auto mb-4`} />
          <h3 className="text-xl font-semibold mb-2">Gestione mensile ore</h3>
          <p className={`${initialTheme === 'light'?'text-gray-600':'text-gray-200'} `}>
            Visualizza e monitora le ore lavorate dai dipendenti ogni mese, con riepiloghi chiari e accessibili.
          </p>
        </Card>

        {/* Box 2 */}
        <Card variant="summaryCard">
          <BarChart3 className={`${initialTheme === 'light'?'text-blue-500 hover:text-blue-900':'text-blue-300 hover:text-blue-500'} w-12 h-12 mx-auto mb-4`} />
          <h3 className="text-xl font-semibold mb-2">Analisi tramite grafici</h3>
          <p className={`${initialTheme === 'light'?'text-gray-600':'text-gray-200'} `}>
            Esplora grafici settimanali e mensili che mostrano l’andamento delle ore lavorate e l’efficienza del team.
          </p>
        </Card>

        {/* Box 3 */}
        <Card variant="summaryCard">
          <ClipboardList className={`${initialTheme === 'light'?'text-blue-500 hover:text-blue-900':'text-blue-300 hover:text-blue-500'} w-12 h-12 mx-auto mb-4`} />
          <h3 className="text-xl font-semibold mb-2">Form presenze e attività</h3>
          <p className={`${initialTheme === 'light'?'text-gray-600':'text-gray-200'} `}>
            Compila facilmente i dati di presenza e registra le attività quotidiane del personale in pochi click.
          </p>
        </Card>
   </>
  )
}

export default SummaryCards