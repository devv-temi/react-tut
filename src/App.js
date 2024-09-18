import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItem] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of cocoa covered almonds unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: false,
      item: "item 3",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItems);
    localStorage.setItem("shopponglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    // console.log(id)
    const listItems = items.filter((item) => item.id !== id);
    setItem(listItems);
    localStorage.setItem("shopponglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Groceriess" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
