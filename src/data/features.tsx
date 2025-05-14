import { Building2, Home, Clock9, CalendarDays, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: FeatureItem[] = [
  {
    id: "onsite",
    icon: Building2,
    title: "Rilevazione presenze in sede",
    description: "Gestisci le timbrature in sede con precisione, monitorando ingressi e uscite in tempo reale.",
  },
  {
    id: "remote",
    icon: Home,
    title: "Smart Working",
    description: "Registra facilmente le attività da remoto con sistemi flessibili e accessibili ovunque.",
  },
  {
    id: "clocking",
    icon: Clock9,
    title: "Timbratura mobile",
    description: "Timbra da qualsiasi luogo tramite app mobile o browser, con geolocalizzazione opzionale.",
  },
  {
    id: "weekly",
    icon: CalendarDays,
    title: "Tabella settimanale",
    description: "Visualizza rapidamente le ore lavorate giorno per giorno e il totale settimanale.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Grafici di riepilogo",
    description: "Analizza le performance settimanali e mensili tramite grafici chiari e interattivi.",
  },
];
