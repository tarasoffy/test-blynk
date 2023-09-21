import React, { useContext, useEffect } from "react";
import "./Comments.css";
import { CommentCard } from "../CommentCard/CommentCard";
import { FormComments } from "../FormComments/FormComments";
import { CurrentIdContext } from "../../App";

export const Comments = () => {
  const { id, comments, getComments } = useContext(CurrentIdContext);

  useEffect(() => {
    getComments();
  }, [id]);

  return (
    <div className="comments">
      <h1 className="comments-title">Comments #{id}</h1>
      {comments.map((item) => (
        <CommentCard text={item.textComment} color={item.color} />
      ))}
      <FormComments refresh={getComments} />
    </div>
  );
};
