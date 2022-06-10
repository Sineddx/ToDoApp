export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.note] };
    case "DELETE_NOTE":
      const newNotes = state.notes.filter((note) => note.id !== action.id);
      return { ...state, notes: newNotes };
    case "EDIT_NOTE":
      return { ...state, editData: action.data };
    case "OVERWRITE":
      const notes = [...state.notes];
      const index = notes.findIndex((x) => x.id === action.id);
      if (index >= 0) {
        notes[index].title = action.title;
        notes[index].desc = action.desc;
      }
      return { ...state, notes: notes };
    case "SHOW_MODAL":
      return { ...state, showModal: true };
    case "HIDE_MODAL":
      return { ...state, showModal: false };
    default:
      throw new Error();
  }
};

export const initialState = {
  notes: [
    {
      id: 1,
      title: "Wynieść śmieci",
      desc: "blablabla",
      done: false,
    },
    {
      id: 2,
      title: "Wywiesić pranie",
      desc: "blablabla",
      done: false,
    },
  ],
  showModal: false,
  editData: {},
};
