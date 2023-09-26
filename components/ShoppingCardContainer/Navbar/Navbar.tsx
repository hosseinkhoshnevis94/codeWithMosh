

interface NavbarProps{
    count:number
}
const Navbar = ({count}:NavbarProps) => {
  return (
    <div>There is {count} items</div>
  )
}

export default Navbar