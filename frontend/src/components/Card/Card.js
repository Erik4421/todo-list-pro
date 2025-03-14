import "./../../static/card/card_structure.css";


export default function Card({className, children}) {
  return (
    <div className={className}>{children}</div>
  )
}
