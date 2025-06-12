import React, { useState, useEffect } from "react";

function PostForm({ addPost, updatePost, currentPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
      setContent(currentPost.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (currentPost) {
      updatePost({ ...currentPost, title, content });
    } else {
      addPost({ title, content });
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {currentPost ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
}

export default PostForm;
