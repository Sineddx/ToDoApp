import Note from "./Note/Note";
import NewNote from "./NewNote/NewNote";
import styles from "./Notes.module.css";
import ReducerContext from "../../context/reducerContext";
import { useContext } from "react";
function Notes() {
  const {
    state: { notes: notes },
  } = useContext(ReducerContext);
  return (
    <section className={styles.notes}>
      {notes
        ? notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              desc={note.desc}
              title={note.title}
            />
          ))
        : null}
      <NewNote />
    </section>
  );
}

export default Notes;
