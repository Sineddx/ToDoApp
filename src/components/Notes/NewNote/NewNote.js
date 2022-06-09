import styles from "./NewNote.module.css";
import Modal from '../../Modal/Modal';
import { useContext } from "react";
import ReducerContext from "../../../context/reducerContext";
function NewNote() {
  const ctx = useContext(ReducerContext);
  const {showModal} = ctx.state;
  const clickHandler = () => {
    ctx.dispatch({type: "SHOW_MODAL"});
  }
  return (
    <>
    <div className={styles.newNote}>
      <button onClick={() => ctx.dispatch({type:"SHOW_MODAL"})} className={styles.newNoteBtn}>Dodaj nową notatkę</button>
      {console.log(showModal)}
    </div>
    {showModal ? <Modal closeModal={()=> ctx.dispatch({type:"HIDE_MODAL"})}/> : null}
    </>
  );
}

export default NewNote;
