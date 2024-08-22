import React from "react";
import "../styles/Note.css";

function Item({ item, onDelete }) {
  return (
    <div className="item-container">
      <p className="item-title">{item.name}</p>
      <p className="item-content">{item.description}</p>
      <p className="item-price">{item.price}</p>
      <button className="delete-button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );
}
export default Item;
