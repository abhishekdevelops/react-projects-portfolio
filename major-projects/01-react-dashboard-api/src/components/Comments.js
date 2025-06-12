import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data.slice(0, 10))) 
      .catch((err) => console.log("Error fetching comments:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p>Loading comments...</p>
      ) : (
        comments.map((comment) => (
          <div className="card mb-3 p-3" key={comment.id}>
            <h5>{comment.name}</h5>
            <p><strong>Email:</strong> {comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
