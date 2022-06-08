import styles from "./NewNote.module.css";
function NewNote() {
  return (
    <div className={styles.newNote}>
      <button className={styles.newNoteBtn}>Dodaj nową notatkę</button>
    </div>
  );
}

export default NewNote;
