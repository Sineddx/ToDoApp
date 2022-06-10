import styles from "./NewNote.module.css";
import Modal from "../../Modal/Modal";
import { useContext } from "react";
import ReducerContext from "../../../context/reducerContext";
function NewNote() {
  const ctx = useContext(ReducerContext);
  const { showModal } = ctx.state;
  const clickHandler = () => {
    ctx.dispatch({ type: "SHOW_MODAL" });
    ctx.dispatch({ type: "EDIT_NOTE", data: {} });
  };

  return (
    <>
      <div className={styles.newNote}>
        <button onClick={clickHandler} className={styles.newNoteBtn}>
          Dodaj nową notatkę
        </button>
        {console.log(showModal)}
      </div>
      <Modal
        showModal={showModal}
        closeModal={() => ctx.dispatch({ type: "HIDE_MODAL" })}
      />
    </>
  );
}

export default NewNote;
