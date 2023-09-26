import styles from './Box.module.css'

const Box = () => {    
  return (
    <div className={[styles['box-container'] , styles['blue-background']].join(' ')}>Box</div>
  )
}

export default Box