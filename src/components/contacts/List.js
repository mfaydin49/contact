import React from "react";
import { contactSelectors, removeAllContacts } from "../../redux/contactSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

const List = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.selectAll);
  const numberOfContacts = useSelector(contactSelectors.selectTotal);

  const handleDeleteAllBtn = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeAllContacts());
    }
  };
  return (
    <div>
      {numberOfContacts > 0 && (
        <div className="deleteAllBtn" onClick={handleDeleteAllBtn}>
          Delete All
        </div>
      )}
      <ul className="list">
        {contacts.map((contact) => (
          <Item key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default List;
