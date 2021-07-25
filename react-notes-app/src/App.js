import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Note from "./components/Note";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Ths is a note",
      date: "13/04/2021",
    },
    {
      id: nanoid(),
      text: "Ths is a note",
      date: "13/04/2021",
    },
    {
      id: nanoid(),
      text: "Ths is a note",
      date: "13/04/2021",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}
