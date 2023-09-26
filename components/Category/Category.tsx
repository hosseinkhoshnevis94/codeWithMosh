import {useState,useEffect} from 'react'
import ProductList from '../ProductList/ProductList'

const Category = () => {
    const [category,setCategory] = useState<string>()



  return (
    <>
    <select name="" id="" onChange={(e)=> {setCategory(e.target.value)}}>
        <option value="category-1">category-1</option>
        <option value="category-2">category-2</option>
        <option value="category-3">category-3</option>
    </select>
    <div> <ProductList category={category}></ProductList> </div>
    </>
  )
}

export default Category