import axios from "axios";

const API_BASE = "https://api.socialverseapp.com/admin";

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
});

// Fetch analytics data (e.g., user activity, engagement metrics)
export const fetchAnalytics = () => {
  return apiClient
    .get("/analytics")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching analytics:", error);
      throw error;
    });
};

// Fetch all users
export const fetchUsers = () => {
  return apiClient
    .get("/users")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error;
    });
};

// Fetch all content (posts, comments) that need moderation
export const fetchContent = () => {
  return apiClient
    .get("/content")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching content:", error);
      throw error;
    });
};

// Moderate a specific piece of content (approve, reject, etc.)
export const moderateContent = (contentId, action) => {
  return apiClient
    .post(`/content/${contentId}/moderate`, { action })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error moderating content:", error);
      throw error;
    });
};

// Fetch dashboard data
export const fetchDashboardData = () => {
  return apiClient
    .get("/dashboard")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching dashboard data:", error);
      throw error;
    });
};

// Update user status (active, banned, etc.)
export const updateUserStatus = (userId, status) => {
  return apiClient
    .put(`/users/${userId}`, { status })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error updating user status:", error);
      throw error;
    });
};

// Export all functions

