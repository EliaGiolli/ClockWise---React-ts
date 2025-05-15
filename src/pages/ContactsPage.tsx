//External libraries
import { useForm } from "react-hook-form"
//Internal imports
import { useThemeStore } from "../store/store"
import { FormData } from "../types/genericTypes";
//react components
import Button from "../components/Button";
import InputField from "../components/InputField";

function ContactsPage() {
  const initialTheme = useThemeStore((state) => state.initialTheme);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  
  const handleFormSubmit = (data:FormData) => {
    console.log(data)
    reset();    
  };

  return (
    <section className="flex flex-col w-full min-h-screen p-4 pb-20 mt-10">
       <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
        <div className="flex justify-center items-center text-center gap-4 w-full p-4">
              <h1 className={`border-b-1 font-3xl md:text-4xl font-bold uppercase ${initialTheme==='light'?'text-blue-900 border-b-blue-500':'text-blue-500 border-b-blue-300'}`}>Contattaci!</h1>
          </div>
            <div className="p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg md:text-2xl">Inserisci nome e email</h3>
              <div className="flex flex-col items-center gap-4 p-6">
                <label htmlFor="name" className="mt-5 text-md md:text-lg">Inserisci il tuo nome </label>
                <InputField 
                  type="text"
                  {...register("nome",
                    {required:"il campo è obbligatorio",
                      minLength: {value: 3, message:"nome utente troppo corto"},
                      maxLength: 10
                  })} 
                  placeholder="inserisci il tuo nome" 
                  className={`w-full transition-all mr-0 sm:mr-6 p-3 my-5 md:my-0 ${initialTheme ==='light'?'bg-white text-gray-900 rounded-md hover:bg-blue-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-800 ':'bg-white text-gray-900 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 '}`}
                />
                {errors.nome && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.nome.message}</p>}
                <label htmlFor="email">Inserisci la tua email </label>
                <InputField
                  {...register("email",
                    {required:"il campo è obbligatorio",
                      minLength:3,
                      pattern:{
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Inserisci un'email valida"
                      }
                    })} 
                  placeholder="inserisci la tua email" 
                  className={`w-full transition-all mr-0 sm:mr-6 p-3 my-5 md:my-0 ${initialTheme ==='light'?'bg-white text-gray-900 rounded-md hover:bg-blue-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-800 ':'bg-white text-gray-900 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 '}`}
                  />
                  {errors.email && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.email.message}</p>}
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-4 p-4">
              <p className={`${initialTheme==='light'?'text-gray-500':'text-white'} mx-auto p-4 text-md`}>I tuoi dati verranno trattati secondo le norme della privacy</p>
              <div className="flex gap-3">
                <InputField type="checkbox" {...register("privacy", { required: "Devi accettare la privacy" })} />
                <label>Accetta la nostra privacy</label>
              </div>
              {errors.privacy && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.privacy.message}</p>}
              <Button
                variant='customBtn'
                disabled={isSubmitting}
                type="submit" 
                className="custom-button"
                > 
                Contattami!
              </Button>
            </div>
        </form>
    </section>
  )
}

export default ContactsPage