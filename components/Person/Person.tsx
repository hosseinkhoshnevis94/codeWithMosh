import {useState} from 'react'
import Button from '../Button'

const Person = () => {
const [person,setPerson] = useState({
    count:2,
    items:[
        {id:1,name:'john',allow:false},
        {id:2,name:'martin',allow:false},
        {id:3,name:'jack',allow:false}
    ]
})

const handleAllow = () =>{
    setPerson({
        ...person,items:person.items.map(item=>item.id===1 ? {...item,allow:true} : item)
    })
}
  return (
    <>
    <div>{person.items.map(item => <div>{item.name}-{item.allow===true ? 'Access' : " Denied"}</div>)}</div>
    <Button onClick={handleAllow}>Allow john</Button>
    </>
  )
}

export default Person