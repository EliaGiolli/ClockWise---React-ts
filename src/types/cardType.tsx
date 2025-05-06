import { ReactNode } from "react";

type CardVariant = 'default' | 'summaryCard';

export interface CardProps {
    children: ReactNode,
    className?: string,
    variant?: CardVariant
}