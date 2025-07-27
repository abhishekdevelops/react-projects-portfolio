import React from "react";
import "../App.css";

function PostList({ posts, onEdit, onDelete }) {
  if (posts.length === 0) {
    return <p className="no-posts">No posts yet</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="post-actions">
            <button onClick={() => onEdit(post)} className="edit-btn">
              ✏️ Edit
            </button>
            <button onClick={() => onDelete(post.id)} className="delete-btn">
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
