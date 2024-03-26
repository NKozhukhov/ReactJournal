import style from "./form.module.scss";
import Button from "../button/Button.jsx";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formValidState, setFormValidState] = useState({
    title: true,
    date: true,
    text: true,
  });

  const addNote = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.text?.trim().length) {
      setFormValidState((state) => ({ ...state, text: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, text: true }));
    }
    if (!formProps.date) {
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, date: true }));
    }
    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <form className={style.form} onSubmit={addNote}>
      <input
        type="text"
        name="title"
        className={`${style.input} ${formValidState.title ? "" : style.invalid}`}
      />
      <input type="text" name="tag" />
      <input
        type="date"
        name="date"
        className={`${style.input} ${formValidState.date ? "" : style.invalid}`}
      />
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        className={`${style.input} ${formValidState.text ? "" : style.invalid}`}
      ></textarea>
      <Button text="Сохранить" />
    </form>
  );
};

export default Form;
