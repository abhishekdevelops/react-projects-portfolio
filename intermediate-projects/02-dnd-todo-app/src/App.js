// App.js
import React, { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  // Load posts from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(saved);
  }, []);

  // Save posts to localStorage
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(p => p.id === updatedPost.id ? updatedPost : p));
    setCurrentPost(null);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const editPost = (post) => {
    setCurrentPost(post);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h2>📝 Blog Post Editor</h2>
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
