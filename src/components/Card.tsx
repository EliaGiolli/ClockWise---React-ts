import { CardProps} from '../types/genericTypes'

function Card({children,className}:CardProps) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Card