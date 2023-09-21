import React, { useContext, useEffect, useState } from "react";
import "./ListItem.css";
import { CurrentIdContext } from "../../App";

export const ListItem = ({ idItem, itemText, comments, refresh }) => {
  const [currentId, setCurrentId] = useState();

  const { updateId, getComments, setNewId, id } = useContext(CurrentIdContext);

  useEffect(() => {
    setCurrentId(id);
  }, [id]);

  const getItemsStorage = () => {
    const items = localStorage.getItem("items");
    const parseItems = JSON.parse(items);
    return parseItems;
  };

  const deleteItem = () => {
    const items = getItemsStorage();
    const deleteItem = items.filter((item) => item.id != idItem);
    localStorage.setItem("items", JSON.stringify(deleteItem));
    refresh();
    getComments();
    setNewId();
  };

  const chooseItem = (e) => {
    if (e.target.tagName === "LI") {
      updateId(idItem);
    }
  };

  return (
    <li
      onClick={chooseItem}
      class={`list-group-item ${idItem === currentId ? "active" : null}`}
    >
      {itemText}
      <span className="badge badge-pill">{comments}</span>
      <button onClick={deleteItem} className="btn-delete btn-outline-detele">
        Delete
      </button>
    </li>
  );
};
