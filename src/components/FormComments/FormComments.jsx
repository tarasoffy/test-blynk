import React, { useContext, useState } from "react";
import "./FormComments.css";
import { CurrentIdContext } from "../../App";
import { useGetItemsStorage } from "../../hooks/useGetItemsStorage";

export const FormComments = ({ refresh }) => {
  const [textInput, setTextInput] = useState("");
  const [colorComment, setColorComment] = useState("#000000");

  const { id, getItems } = useContext(CurrentIdContext);

  const getItemsStorage = useGetItemsStorage;

  const createComment = () => {
    return {
      textComment: textInput,
      color: colorComment,
    };
  };

  const addComment = (e) => {
    e.preventDefault();
    if (textInput.trim().length) {
      const newComment = createComment();
      const itemsStorage = getItemsStorage();
      itemsStorage.forEach((item) => {
        if (item.id === id) {
          item.comments.push(newComment);
        }
      });
      localStorage.setItem("items", JSON.stringify(itemsStorage));
      refresh();
      setTextInput("");
      getItems();
    }
  };

  return (
    <form>
      <input
        class="comments-form-control comments-input-color"
        type="color"
        value={colorComment}
        onChange={(e) => setColorComment(e.target.value)}
      />
      <textarea
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        className="form-control"
        placeholder="Type comment here..."
        required
      ></textarea>
      <button onClick={addComment} className="btn-add-comment">
        Add New
      </button>
    </form>
  );
};
