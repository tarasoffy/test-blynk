import React from "react";
import './CommentCard.css'

export const CommentCard = ({text, color}) => {
  return (
    <div className="comments-card">
      <div style={{backgroundColor: color}} className="comments-item-card"></div>
      <p>{text}</p>
    </div>
  );
};
