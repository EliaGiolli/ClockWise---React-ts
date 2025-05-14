
export interface FooterProps {
    className?: string; // Accept className prop
  }
  
 export type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "summaryCard" | 'productCard';
  };
  
  //React provides with types to assign a type to an HTML element
export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: 'customBtn' | 'hamburgerBtn' | 'default';
};