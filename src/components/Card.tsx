import { CardProps} from '../types/cardType'

function Card({children,className}:CardProps) {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Card