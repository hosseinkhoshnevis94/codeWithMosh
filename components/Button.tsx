interface ButtonProps {
    color?: 'primary' |'danger' | "secondary" |"success" |"danger" |"warning" |"info" |"light" |"dark" ,
    outline?:boolean,
    children: React.ReactNode,
    onClick?: () => void
}

const Button = ({color='primary',children,onClick,outline=false}:ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${outline ? 'outline-' : ''}${color}`} style={{margin:'5px'}} onClick={onClick}>{children}</button>
  )
}

export default Button