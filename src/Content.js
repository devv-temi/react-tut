import ItemList from "./ItemList";

const content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "5rem" }}>Your list is empty</p>
      )}
    </>
  );
};

export default content;
