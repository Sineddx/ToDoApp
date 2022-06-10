import { useContext, useEffect, useId, useState } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ReducerContext from "../../context/reducerContext";
function Modal(props) {
  const [modalType, setModalType] = useState();
  const [titlee, setTitlee] = useState("");
  const [desc, setDesc] = useState("");
  const ctx = useContext(ReducerContext);
  let idx = useId();
  const {
    state: { editData: data },
  } = ctx;
  const {
    modalContainer,
    modalBackground,
    label,
    textarea,
    saveBtn,
    title,
    ha1,
    closeBtn,
    modalContainerOpen,
    modalContainerClose,
  } = styles;
  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitlee(value);
  };
  const changeDescHandler = (event) => {
    const value = event.target.value;
    setDesc(value);
  };
  useEffect(() => {
    entryData();
  }, [data]);

  const entryData = () => {
    setTitlee(data.title || "");
    setDesc(data.desc || "");
  };
  const saveHandler = () => {
    const note = {
      title: titlee,
      desc: desc,
      id: idx,
    };
    data.title
      ? ctx.dispatch({ type: "OVERWRITE", title: titlee, desc, id: data.id })
      : ctx.dispatch({ type: "ADD_NOTE", note: note });
    setTitlee("");
    setDesc("");
    props.closeModal();
  };
  const closeHandler = () => {
    ctx.dispatch({ type: "EDIT_NOTE", data: {} });
    setTitlee("");
    setDesc("");
    props.closeModal();
  };
  if (!props.showModal) return null;
  return ReactDOM.createPortal(
    <>
      {console.log(data)}
      <div onClick={closeHandler} className={modalBackground}></div>
      <div className={`${modalContainer} ${modalContainerOpen}`}>
        <div className={closeBtn}>
          <button onClick={props.closeModal}>X</button>
        </div>
        <h1 className={ha1}>
          {data.title ? "Edytuj notatkę" : "Nowa notatka"}
        </h1>
        <label className={label} htmlFor="fname">
          Tytuł notatki
        </label>
        <input
          className={title}
          type="text"
          id="fname"
          name="title"
          defaultValue={titlee}
          onChange={changeTitleHandler}
        />
        <div>
          <label className={label} htmlFor="lname">
            Opis
          </label>
          <textarea
            className={textarea}
            defaultValue={desc}
            onChange={changeDescHandler}
          ></textarea>
        </div>
        <div className={saveBtn}>
          <button onClick={saveHandler}>Zapisz</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
