import { styled } from "styled-components"
import Box from "../Box/Box"

const TailwindList = () => {
  const List = styled.ul`
  border:1px solid black;
  `
  const Item = styled.li  `
  padding:4px;
  background-color:red
  `

  return (
    <>
    <List>
      <Item>first</Item>
      <Item>second</Item>
      <Item>third</Item>
      <Item>forth</Item>
    </List>

    </>
  )
}

export default TailwindList