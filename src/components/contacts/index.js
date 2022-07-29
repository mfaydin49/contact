import React from "react";
import Form from "./Form";
import List from "./List";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../redux/contactSlice";

const Contacts = () => {
  const numberOfcontact = useSelector(contactSelectors.selectTotal);

  return (
    <>
      <h1>Contacts ({numberOfcontact})</h1>
      <List />
      <Form />
    </>
  );
};

export default Contacts;
