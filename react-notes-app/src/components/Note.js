import React from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";

export default function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <div className="note-icons">
          <MdEdit className="edit-icon" size="1.3em" />
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    </div>
  );
}
