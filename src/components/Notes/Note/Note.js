import { createContext, useContext, useState } from "react";
import styles from "./Note.module.css";
import myIcon from "../../../assets/icons/done2.svg";
import ReducerContext from "../../../context/reducerContext";
function Note(props) {
  const ctx = useContext(ReducerContext);
  const { note, taskDone } = styles;
  const [show, setShow] = useState(false);
  const [noteClass, setNoteClass] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  const deleteHandler = (id) => {
    ctx.dispatch({ type: "DELETE_NOTE", id });
  };
  const editHandler = () => {
    const obj = {
      title: props.title,
      desc: props.desc,
      id: props.id,
    };
    ctx.dispatch({ type: "EDIT_NOTE", data: obj });
    ctx.dispatch({ type: "SHOW_MODAL" });
  };
  return (
    <div className={noteClass ? note : note}>
      <div onClick={showHandler}>
        <p>{props.title}</p>
        {show && <div className={styles.desc}> {props.desc} </div>}
      </div>
      <div className={styles.controlBtns}>
        <button onClick={editHandler} className={styles.editBtn}>
          Edytuj
        </button>
        <button
          onClick={() => deleteHandler(props.id)}
          className={styles.delBtn}
        >
          Usuń
        </button>
      </div>
    </div>
  );
}

export default Note;
