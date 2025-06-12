import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log("Error fetching posts:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4"> Posts</h2>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.slice(0, 10).map((post) => (
          <div className="card mb-3 p-3" key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
