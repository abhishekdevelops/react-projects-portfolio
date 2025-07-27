import React, { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
    setCurrentPost(null);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const editPost = (post) => {
    setCurrentPost(post);
  };

  return (
    <div className="app-container">
      <h2 className="title">📝 Blog Post Editor</h2>
      <PostForm
        addPost={addPost}
        updatePost={updatePost}
        currentPost={currentPost}
      />
      <hr />
      <PostList posts={posts} onEdit={editPost} onDelete={deletePost} />
    </div>
  );
}

export default App;
