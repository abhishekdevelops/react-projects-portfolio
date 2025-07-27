import React, { useState, useEffect } from "react";
import "../App.css";

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
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
        className="textarea"
      />
      <button type="submit" className="submit-btn">
        {currentPost ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
}

export default PostForm;
