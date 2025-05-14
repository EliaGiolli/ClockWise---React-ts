import { cva } from 'class-variance-authority'

//React provides with types to assign a type to an HTML element
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    variant: 'customBtn' | 'hamburgerBtn' | 'default';
};

function Button({variant, children, onClick,...props}: ButtonProps) {
  return (
    <button {...props} onClick={onClick} className={buttonVariant({variant})}>
        {children}
    </button>
  )
}

export default Button

//cva is a function that returns a function(in this case it's 'buttonVariant')
//This function will return a string that we can use in the 'className' of the HTML
const buttonVariant = cva(
    "px-5 py-4 semibold rounded-md text-gray-20 cursor-pointer",
    //cva will merge these variants with the defualt variant provided above
    {
        variants:{
            variant: {
                customBtn: 'bg-blue-600 hover:bg-blue-700 text-gray-200',
                hamburgerBtn: 'block md:hidden',
                default: ''
            },
        },
        defaultVariants: { variant: 'default' }
    },
)