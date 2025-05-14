import { cva } from "class-variance-authority";
import { useThemeStore } from "../store/store";
import { clsx } from "clsx";

import { CardProps } from "../types/genericTypes";

const cardVariant = cva(
  "semibold text-gray-20 cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        summaryCard: "shadow-md rounded-2xl p-6 text-center",
        productCard: "w-full max-w-2xl p-8 rounded-lg shadow-lg mx-auto"
      },
    },
    defaultVariants: { variant: "default" },
  }
);

function Card({ children, variant = "default", className, ...props }: CardProps) {
  const initialTheme = useThemeStore((state) => state.initialTheme);

  const themeClasses: Record<string, string> = {
    default:
      initialTheme === "light"
        ? "bg-gray-100 text-gray-900 shadow-md"
        : "bg-gray-800 text-gray-200 shadow-md",
    summaryCard:
      initialTheme === "light"
      ? "bg-white text-gray-900 shadow-gray-900"
      : "bg-gray-900 text-gray-200 shadow-gray-200",
    productCard:
      initialTheme === "light"
        ? "bg-white text-gray-900 shadow-gray-900"
        : "bg-gray-900 text-gray-200 shadow-gray-200",
  };

  return (
    <div
      className={clsx(cardVariant({ variant }), themeClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
