import React, { useState, useEffect } from "react";
import { fetchAnalytics } from "../services/api";

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics()
      .then((response) => {
        setAnalytics(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching analytics:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!analytics) {
    return <div>No analytics data available</div>;
  }

  return (
    <div>
      <h1>Analytics</h1>
      {/* Render analytics data here */}
    </div>
  );
};

export default Analytics;
