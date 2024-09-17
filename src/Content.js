import React from "react";
import { useState } from "react";
// import { FaTrashAlt } from "react-icon/fa"

const content = () => {
  // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
  const [items, setItem] = useState([
    {
      id: 1,
      checked: false,
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

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label htmlFor="">{item.item}</label>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default content;
