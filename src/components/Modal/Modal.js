import { useState } from 'react';
import styles from './Modal.module.css';
function Modal(props){
    const [modalType, setModalType] = useState();

const {modalContainer, modalBackground, label, textarea, saveBtn, title, ha1, closeBtn} = styles;
    return(
        <div className={modalBackground}>
            <div className={modalContainer}>
                <div className={closeBtn}>
                <button  onClick={() => props.closeModal()}>X</button>
                </div>
                <h1 class={ha1}>Nowa notatka</h1>
                    <label className={label} for="fname">Tytuł notatki</label>
                    <input className={title} type="text" id="fname" name="title"/>
                    <div>
                    <label  className={label} for="lname">Opis</label>
                    <textarea className={textarea}></textarea>
                    </div>
                    <div class={saveBtn}>
                    <button>Zapisz</button>
                    </div>
            </div>
        </div>
    )
}

export default Modal;