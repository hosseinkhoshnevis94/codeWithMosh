import React, { useState,useEffect } from 'react'
import { string } from 'zod'

const ProductList = ({category}:{category:string}) => {
    const [product,setProduct] = useState<string[]>()
    const disconnetct = () => console.log('disconnect');
    

    useEffect(()=>{
        console.log('fething...',category);
        setProduct(['products in',category])
        return(()=>disconnetct())
    },[category])
  return (
    <div>{product}</div>
  )
}

export default ProductList