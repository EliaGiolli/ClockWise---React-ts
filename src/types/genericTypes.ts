
export interface FooterProps {
    className?: string; // Accept className prop
  }
  
 export type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "summaryCard" | 'productCard';
  };
  
  //React provides with types to assign a type to an HTML element
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'customBtn' | 'hamburgerBtn' | 'default';
  active?:boolean;
};

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  children?: React.ReactNode;
};

export type FormData = {
  nome: string;
  email: string;
  privacy: boolean;
};
