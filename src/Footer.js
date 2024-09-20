import React from "react";

const Footer = ({ length }) => {
  // const today = new Date()
  return (
    <footer>
      <p>
        {length} grocery {length === 1 ? "list" : "lists"}
      </p>
    </footer>
  );
};

export default Footer;
