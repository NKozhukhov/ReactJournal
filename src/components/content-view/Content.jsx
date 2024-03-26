import "./content.scss";
import Form from "../../ui/form/Form.jsx";

const Content = ({ onSubmit }) => {
  return (
    <div className="content">
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Content;
