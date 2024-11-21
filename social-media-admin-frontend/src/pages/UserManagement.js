import React, { useState, useEffect } from "react";
import { fetchUsers, updateUserStatus } from "../services/api"; // Import API functions

const UserManagement = () => {
  // Initialize the state with an empty array, so that map() can safely be called
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        // Check if data is valid before setting state
        if (Array.isArray(data)) {
          setUsers(data); // Set users to the fetched data
        } else {
          console.error("Invalid data format for users");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  // Handle status update (e.g., activate or ban user)
  const handleStatusUpdate = (userId, status) => {
    updateUserStatus(userId, status)
      .then(() => {
        // Update local state after the status update
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, status } : user
          )
        );
      })
      .catch((error) => {
        console.error("Error updating user status:", error);
      });
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {/* Make sure that 'users' is an array */}
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <li key={user._id}>
              <h2>{user.name}</h2>
              <p>Status: {user.status}</p>
              <button onClick={() => handleStatusUpdate(user._id, "active")}>
                Activate
              </button>
              <button onClick={() => handleStatusUpdate(user._id, "banned")}>
                Ban
              </button>
            </li>
          ))
        ) : (
          <div>No users found.</div>
        )}
      </ul>
    </div>
  );
};

export default UserManagement;
