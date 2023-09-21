import React, { useContext, useState } from "react";
import "./FormItems.css";
import { useGetItemsStorage } from "../../hooks/useGetItemsStorage";
import { CurrentIdContext } from "../../App";

export const FormItems = ({ refresh }) => {
  const [itemText, setItemText] = useState("");

  const createId = () => {
    const id = (Math.random() * 100000000).toFixed();
    return id;
  };

  const createItem = () => {
    const testObj = {
      id: createId(),
      itemText,
      comments: [],
    };
    return testObj;
  };

  const getItemsStorage = useGetItemsStorage;

  const { setNewId } = useContext(CurrentIdContext);

  const addItemToStorage = (e) => {
    e.preventDefault();
    if (itemText.trim().length) {
      const newItem = createItem();
      const parseItems = getItemsStorage();
      parseItems.push(newItem);
      localStorage.setItem("items", JSON.stringify(parseItems));
      refresh();
      setNewId();
      setItemText("");
    }
  };

  return (
    <form className="form-items">
      <input
        class="form-control"
        placeholder="Type name here..."
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        required
      />
      <button onClick={addItemToStorage} className="btn btn-info">
        Add New
      </button>
    </form>
  );
};
