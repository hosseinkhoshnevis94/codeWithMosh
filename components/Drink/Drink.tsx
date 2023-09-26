import {useState} from 'react'
import Button from '../Button'

const Drink = () => {
    const[drink , setDtrink] = useState({
        name:'Please choose',
        number:1,
        brand:{title:'',id:1}

    })
    const handleCoffee = () =>{
        setDtrink({...drink,name:"Coffee"})
        setDtrink({...drink,brand:{...drink.brand,title:'Starbox'}})
    }
    const handleCola = () =>{
        setDtrink({...drink,name:"Soda"})
        setDtrink({...drink,brand:{...drink.brand,title:'Cola'}})
    }
    return (
    <>
    <div>Updating objects:</div>
    <div>You have {drink.number} {drink.name} {drink.brand.title && `with ${drink.brand.title} brand.`}</div>
    <Button color='success' onClick={handleCoffee}>Coffee</Button>
    <Button color='danger' onClick={handleCola}>Soda</Button>
    </>
  )
}

export default Drink