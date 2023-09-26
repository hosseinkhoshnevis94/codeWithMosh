import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface LikeProps{
    onClick:()=> void
}
const Like = ({onClick}:LikeProps) => {
  const [active, setActive] = useState(false);
  let a = 0
  const toggle = () =>{
    setActive(!active);
    a++
    console.log(a);
    
    onClick()
  }
  return (
    <>
      {active ? (
        <AiFillHeart
          onClick={toggle}
          className={styles.icons}
          ></AiFillHeart>
          ) : (
              <AiOutlineHeart
              onClick={toggle}
              className={styles.icons}
        ></AiOutlineHeart>
      )}
    </>
  );
};

export default Like;
