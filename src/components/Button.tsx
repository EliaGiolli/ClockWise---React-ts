import { cva } from "class-variance-authority";
import clsx from "clsx";
import { useThemeStore } from "../store/store";
import { ButtonProps } from "../types/genericTypes";

function Button({
  children,
  onClick,
  className,
  variant = "customBtn",
  active = false,
  ...props
}: ButtonProps) {
  const theme = useThemeStore((state) => state.initialTheme ?? "light");

  
  return (
    <button
      className={clsx(buttonVariant({ variant, theme, active }), className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

// 👇 className generator con varianti dinamiche
const buttonVariant = cva(
    "px-5 py-4 font-semibold rounded-md cursor-pointer transition-all duration-200",
    {
      variants: {
        variant: {
          default: "",
          customBtn: "shadow-md",
          hamburgerBtn: "block md:hidden",
          tabBtn: "", 
        },
        theme: {
          light: "",
          dark: "",
        },
        active: {
          true: "",
          false: "",
        },
      },
      compoundVariants: [
        {
          variant: "customBtn",
          theme: "light",
          className: "bg-blue-900 hover:bg-blue-700 text-gray-200 shadow-gray-900",
        },
        {
          variant: "customBtn",
          theme: "dark",
          className: "bg-blue-500 hover:bg-blue-400 text-gray-300 hover:text-gray-200 shadow-gray-200",
        },
      ],
      defaultVariants: {
        variant: "customBtn",
        theme: "light",
        active: false,
      },
    }
  );
  