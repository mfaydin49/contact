import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import { Link } from "react-router-dom";

const Item = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <span>{contact.name}</span>
      <span>{contact.phone_number}</span>
      <div className="edit">
        <span>
          <Link to={`/edit/${contact.id}`}>Edit</Link>
        </span>
        <span className="deleteBtn" onClick={() => handleClick(contact.id)}>
          x
        </span>
      </div>
    </li>
  );
};

export default Item;
