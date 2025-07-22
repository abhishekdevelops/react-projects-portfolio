import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes, hasLoaded]);

  const handleDelete = (idToDelete) => {
    const updatedNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(updatedNotes);
  };

  const handleAddOrUpdate = () => {
    if (input.trim() === "") return;

    if (isEditing) {
      setNotes(
        notes.map((note) =>
          note.id === editId ? { ...note, text: input } : note
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const newNote = {
        id: Date.now(),
        text: input,
      };
      setNotes([...notes, newNote]);
    }

    setInput("");
  };

  return (
    <div className="container">
      <h2>📝 Notes App</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddOrUpdate}
          className={isEditing ? "editing" : ""}
        >
          {isEditing ? "Update Note" : "Add Note"}
        </button>
      </div>

      <ul className="note-list">
        {notes.map((note) => (
          <li className="note-item" key={note.id}>
            <span>{note.text}</span>
            <div className="note-actions">
              <button
                className="edit"
                onClick={() => {
                  setInput(note.text);
                  setIsEditing(true);
                  setEditId(note.id);
                }}
              >
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(note.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
