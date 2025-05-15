import { cva } from "class-variance-authority";
import { useThemeStore } from "../store/store";
import { clsx } from "clsx";

import { CardProps } from "../types/genericTypes";

function Card({ children, variant = "default", className, ...props }: CardProps) {
  const theme = useThemeStore((state) => state.initialTheme ?? "light");

  return (
    <div className={clsx(cardVariant({ variant, theme }), className)} {...props}>
      {children}
    </div>
  );
}

export default Card;


const cardVariant = cva(
  "semibold cursor-pointer transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "",
        summaryCard: "shadow-md rounded-2xl p-6 text-center",
        productCard: "w-full max-w-2xl p-8 rounded-lg shadow-lg mx-auto"
      },
      theme: {
        light: "",
        dark: ""
      }
    },
    compoundVariants: [
      {
        variant: "default",
        theme: "light",
        className: "bg-gray-100 text-gray-900 shadow-md"
      },
      {
        variant: "default",
        theme: "dark",
        className: "bg-gray-800 text-gray-200 shadow-md"
      },
      {
        variant: "summaryCard",
        theme: "light",
        className: "bg-white text-gray-900 shadow-gray-900"
      },
      {
        variant: "summaryCard",
        theme: "dark",
        className: "bg-gray-900 text-gray-200 shadow-gray-200"
      },
      {
        variant: "productCard",
        theme: "light",
        className: "bg-white text-gray-900 shadow-gray-900"
      },
      {
        variant: "productCard",
        theme: "dark",
        className: "bg-gray-900 text-gray-200 shadow-gray-200"
      },
    ],
    defaultVariants: {
      variant: "default",
      theme: "light",
    },
  }
);
