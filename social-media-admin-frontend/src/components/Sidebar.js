import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 h-full bg-gray-200 p-4">
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/users">User Management</Link></li>
      <li><Link to="/moderation">Content Moderation</Link></li>
      <li><Link to="/analytics">Analytics</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
