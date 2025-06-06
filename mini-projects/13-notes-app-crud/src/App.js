import React, { useEffect, useState } from "react";

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
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        📝 Notes App
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddOrUpdate}
          style={{
            padding: "10px 16px",
            backgroundColor: isEditing ? "#ff9800" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isEditing ? "Update Note" : "Add Note"}
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note) => (
          <li
            key={note.id}
            style={{
              backgroundColor: "#fff",
              padding: "12px 16px",
              marginBottom: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{note.text}</span>
            <div>
              <button
                onClick={() => {
                  setInput(note.text);
                  setIsEditing(true);
                  setEditId(note.id);
                }}
                style={{
                  marginRight: "10px",
                  backgroundColor: "#2196F3",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
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
