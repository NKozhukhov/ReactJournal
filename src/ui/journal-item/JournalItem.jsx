import "./journal-item.scss";

const JournalItem = ({ title, date, text }) => {
  const formatedDate = new Intl.DateTimeFormat("ru-RU", {
    //weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{text}</div>
      </div>
    </>
  );
};

export default JournalItem;
