import style from "./button.module.scss";

const Button = ({ text }) => {
  return (
    <>
      <button className={style.button}>{text}</button>
    </>
  );
};

export default Button;
