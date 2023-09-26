import { useEffect, useState } from "react";
import { styled } from "styled-components"


interface ListGroupProps {
  cities:{ id: number; name: string }[],
  heading:string,
  onAlert: (cityName:string) => void
}
interface ItemProps{
  active:boolean
}
const showMessage = (message: string): any => {
  return <div>{message}</div>;
};
const ListGroup = ({ cities, heading ,onAlert}: ListGroupProps) => {
const [activeItem, setActiveItem] = useState(0);
const handleSelect = (index: number) => {setActiveItem(index)};
useEffect(()=>{
  console.log('hey');
  
})
const Item = styled.li<ItemProps>`
padding:5px;
color:${props => props.active && 'red'} !important
`
  return (
    <>
      <h3>{heading}</h3>
      <ul className="list-group ">
        {cities.length === 0 && showMessage("Sorry,there is no cities!")}
        {cities.map((item, index) => (
          <Item
           active={index===activeItem}
            key={item.id}
            className={
              activeItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {handleSelect(index),onAlert(item.name)}}
          >
            {item.name}
          </Item>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
