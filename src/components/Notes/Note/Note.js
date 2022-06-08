import { useState } from "react";
import styles from "./Note.module.css";
import myIcon from "../../../assets/icons/done2.svg";
function Note(props) {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className={styles.note}>
      <div onClick={showHandler}>
        <p>{props.title}</p>
        {show && <div className={styles.desc}> {props.desc} </div>}
      </div>
      <div className={styles.controlBtns}>
        <img className={styles.done} src={myIcon}></img>
        <button className={styles.editBtn}>Edytuj</button>
        <button className={styles.delBtn}>Usuń</button>
      </div>
    </div>
  );
}

export default Note;
