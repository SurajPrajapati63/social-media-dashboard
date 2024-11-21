import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">SocialMedia</h1>
      <div>
        <Link className="mx-2" to="/">Dashboard</Link>
        <Link className="mx-2" to="/users">Users</Link>
        <Link className="mx-2" to="/moderation">Moderation</Link>
        <Link className="mx-2" to="/analytics">Analytics</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
