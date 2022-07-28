import React from "react";

const Item = ({ contact }) => {
  return (
    <li>
      <span>{contact.name}</span>
      <span>{contact.phone_number}</span>
      <span className="deleteBtn">x</span>
    </li>
  );
};

export default Item;
