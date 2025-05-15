import { InputFieldProps } from "../types/genericTypes"


function InputField({ className, children, placeholder, onChange, value,disabled, ...props}: InputFieldProps) {
    return (
      <div className="relative">
          <input 
            type="text" 
            className={`nav-input ${className || ''}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            {...props}
          />
          {children}
      </div>
    )
  }
  
  export default InputField