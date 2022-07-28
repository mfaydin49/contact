import React from "react";
import { contactSelectors } from "../../redux/contactSlice";
import { useSelector } from "react-redux";
import Item from "./Item";

const List = () => {
  const contacts = useSelector(contactSelectors.selectAll);
  return (
    <ul className="list">
      {contacts.map((contact) => (
        <Item key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default List;
