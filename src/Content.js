import ItemList from "./ItemList";

const content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "5rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default content;
