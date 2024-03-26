import "./app.scss";
import { useState } from "react";
import Content from "./components/content-view/Content.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Header from "./ui/header/Header.jsx";
import JournalList from "./ui/journal-list/JournalList.jsx";
import JournalItem from "./ui/journal-item/JournalItem.jsx";
import CardButton from "./ui/card-button/CardButton.jsx";
import JournalAddButton from "./ui/journal-add-button/JournalAddButton.jsx";

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "ПОдготовка к обновлению курсов",
  //   date: new Date(),
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in repudiandae nam veniam, voluptatem possimus officia tenetur alias quia dolorem!",
  // },
  // {
  //   id: 2,
  //   title: "Начальная страница",
  //   date: new Date(),
  //   text: "Beatae in repudiandae nam veniam, voluptatem possimus officia tenetur alias quia dolorem!",
  // },
];

const App = () => {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        title: item.title,
        date: new Date(item.date),
        text: item.text,
        id: Math.max(...oldItems.map((i) => i.id)) + 1,
      },
    ]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="app">
      <Sidebar>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.length === 0 && (
            <CardButton className="not-find-item">
              Записи отсутствуют
            </CardButton>
          )}
          {items.length > 0 &&
            items.sort(sortItems).map((el) => (
              <CardButton key={el.id}>
                <JournalItem title={el.title} date={el.date} text={el.text} />
              </CardButton>
            ))}
        </JournalList>
      </Sidebar>
      <Content onSubmit={addItem}></Content>
    </div>
  );
};

export default App;
