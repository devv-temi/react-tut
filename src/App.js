import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItems from "./AddItems";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [items, setItem] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSave = (newItems) => {
    setItem(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSave(listItems);
  };

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    // console.log(newItem);
    setNewItem("");
  };

  const handleDelete = (id) => {
    // console.log(id)
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems);
  };

  return (
    <div className="App">
      <Header title="Groceriess" />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
