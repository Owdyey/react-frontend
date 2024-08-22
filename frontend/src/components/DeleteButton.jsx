import React from "react";
import api from "../api";

const DeleteButton = ({ id }) => {
  const deleteItem = () => {
    try {
      const res = api.delete(`/api/items/${id}`);
      alert("Item Deleted");
    } catch (err) {
      alert(err);
    }
  };
  return <button onClick={deleteItem}>Delete</button>;
};

export default DeleteButton;
