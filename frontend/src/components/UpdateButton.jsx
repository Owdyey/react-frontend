import React from "react";
import api from "../api";

const DeleteButton = ({ getData }) => {
  const deleteItem = () => {
    try {
      const res = api.get(`/api/items/${id}`);
      res.data
        getData(res.data[0])
    } catch (err) {
      alert(err);
    }
  };
  return <button onClick={deleteItem}>Delete</button>;
};

export default DeleteButton;
