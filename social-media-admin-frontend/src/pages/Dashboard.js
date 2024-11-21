import React, { useState, useEffect } from "react";
import { fetchDashboardData } from "../services/api";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch dashboard data
    fetchDashboardData()
      .then((data) => {
        setDashboardData(data); // Store the fetched data
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch dashboard data");
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!dashboardData) {
    return <div>No data available</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4 grid grid-cols-3 gap-6">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-lg font-bold">Total Users</h2>
          <p>{dashboardData.totalUsers}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="text-lg font-bold">Total Content</h2>
          <p>{dashboardData.totalContent}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow">
          <h2 className="text-lg font-bold">Total Reports</h2>
          <p>{dashboardData.totalReports}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Recent Activities</h2>
        <ul>
          {dashboardData.activities.map((activity) => (
            <li key={activity.id} className="border-b py-2">
              {activity.description} -{" "}
              <span className="text-gray-500">
                {new Date(activity.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
