import {useState} from 'react'
import Card from './Card/Card'
import Navbar from './Navbar/Navbar'
import Button from '../Button'

const ShoppingCardContainer = () => {
    const [products,setProducts] = useState(['P-1',"P-2","P-3","P-4"])
    const handleClear = () =>{
        setProducts([])
    }
  return (
    <div>
    <Navbar count={products.length}></Navbar>
    <Card products={products} onClear={handleClear}></Card>
    <Button onClick={handleClear}>clear</Button>

    </div>
  )
}

export default ShoppingCardContainer