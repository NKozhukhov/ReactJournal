import "./card-button.scss";

const CardButton = ({ children, className }) => {
  const cl = "card-button" + (className ? " " + className : "");
  console.log(cl);

  return <div className={cl}>{children}</div>;
};

export default CardButton;
