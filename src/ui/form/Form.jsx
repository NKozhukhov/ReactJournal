import "./form.scss";
import Button from "../button/Button.jsx";
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formValidState, setFormValidState] = useState({
    title: true,
    date: true,
    post: true,
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
    if (!formProps.post?.trim().length) {
      setFormValidState((state) => ({ ...state, post: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, post: true }));
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
    <form className="form" onSubmit={addNote}>
      <input
        type="text"
        name="title"
        style={{ border: formValidState.title ? undefined : "1px solid red" }}
      />
      <input type="text" name="tag" />
      <input
        type="date"
        name="date"
        style={{ border: formValidState.title ? undefined : "1px solid red" }}
      />
      <textarea
        name="text"
        id=""
        cols="30"
        rows="10"
        style={{ border: formValidState.title ? undefined : "1px solid red" }}
      ></textarea>
      <Button text="Сохранить" />
    </form>
  );
};

export default Form;
