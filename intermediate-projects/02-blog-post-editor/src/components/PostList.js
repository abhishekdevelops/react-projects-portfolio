import React from "react";

function PostList({ posts, onEdit, onDelete }) {
  if (posts.length === 0) {
    return <p style={{ color: "#666" }}>No posts yet</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            padding: "10px",
            marginBottom: "10px",
            background: "#f9f9f9",
            borderRadius: "5px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => onEdit(post)}>✏️ Edit</button>
            <button onClick={() => onDelete(post.id)}>🗑️ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
