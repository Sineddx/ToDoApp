export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return state;
    case "DELETE_NOTE":
      return state;
    case "EDIT_NOTE":
      return state;
    case "SHOW_MODAL":
      return {...state, showModal:true}
    case "HIDE_MODAL":
      return {...state, showModal:false}
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
  showModal: false
};
