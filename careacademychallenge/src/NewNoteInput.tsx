import React, { ChangeEvent } from "react";
import "./NewNoteInput.css";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  

  return (
    <>
    <h1 className = "h1"> Note Editor</h1>
    <div>
      <input className="input"
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Enter New Note"
      />
      <button className = "btn" onClick={onAddNoteClick}>Add note</button>
      <button className = "btn">Edit note</button>
      <button className = "btn" >Delete note</button>
      
    </div>
    </>
  );
};