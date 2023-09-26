interface CardProps{
    products: string[]
    onClear: () => void
}


const Card = ({products,onClear}:CardProps) => {
  return (
    <>
    <div>{products.map(item => <div>{item}</div> )}</div>
    </>
  )
}

export default Card