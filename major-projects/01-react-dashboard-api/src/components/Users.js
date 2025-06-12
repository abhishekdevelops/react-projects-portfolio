import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Users</h2>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        users.map((user) => (
          <div className="card mb-3 p-3" key={user.id}>
            <h5>{user.name}</h5>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
