import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [requestType, setRequestType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${requestType}`);
        // if (!response.ok) throw Error("incorrect response")
        const data = await response.json();
        setItems(data);
        // console.log(data)
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchItems();
  }, [requestType]);
  return (
    <div className="App">
      <Form
        action=""
        requestType={requestType}
        setRequestType={setRequestType}
      />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
