import {useState} from 'react'
import Button from '../Button'

const Friuts = () => {
    const[friuts,setFriuts] = useState(['apple','banana','melon'])
    const handleAdd = () =>{
        setFriuts([...friuts,'orange'])
    }
    const handleRemove = () =>{
        setFriuts(friuts.filter(item => item!=='banana'))
    }
    const handleUpdate = () =>{
        setFriuts(friuts.map(item => item=='apple' ? 'red apple' : item))
    }
  return (
    <>
    <div>Updating Array:</div>
    <div>Friuts are:  {friuts.map(item => <span key={item}>{item} </span> )}</div>
    <Button onClick={handleAdd}>add orange</Button>
    <Button onClick={handleRemove}>remove banana</Button>
    <Button onClick={handleUpdate}>update red apple</Button>

    </>
  )
}

export default Friuts


