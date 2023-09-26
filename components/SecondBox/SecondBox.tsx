import styles from './SecondBox.module.css'

const SecondBox = () => {    
  return (
    <div className={[styles.boxContainer,styles.redBackground].join(' ')}>Box</div>
  )
}

export default SecondBox