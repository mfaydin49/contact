import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContacts } from "../../redux/contactSlice";
import { useNavigate } from "react-router-dom";

const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone_number);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(
      updateContacts({
        id: contact.id,
        changes: { name, phone_number: number },
      })
    );
    navigate(-1);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
