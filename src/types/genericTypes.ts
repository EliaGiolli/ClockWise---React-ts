
export interface FooterProps {
    className?: string; // Accept className prop
  }
  
 export type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "summaryCard" | 'productCard';
  };
  