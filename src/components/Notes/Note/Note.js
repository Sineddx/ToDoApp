import { useState } from "react";
import styles from "./Note.module.css";
import myIcon from "../../../assets/icons/done2.svg";
function Note(props) {
  const {note, taskDone} = styles;
  const [show, setShow] = useState(false);
  const [noteClass, setNoteClass] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  const doneHandler = (e) => {
    setNoteClass(true)
  }
  return (
    <div className={noteClass ? note : note} >
      <div onClick={showHandler}>
        <p>{props.title}</p>
        {show && <div className={styles.desc}> {props.desc} </div>}
      </div>
      <div className={styles.controlBtns}>
        <button className={styles.editBtn}>Edytuj</button>
        <button onClick={(e)=>doneHandler()} className={styles.delBtn}>Usuń</button>
      </div>
    </div>
  );
}

export default Note;
