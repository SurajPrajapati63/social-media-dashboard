import axios from "axios";

// Base API configuration
const API_BASE = "https://api.socialverseapp.com/admin"; // Adjust based on your API URL
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch content data
export const fetchContent = () => apiClient.get("/content");

// Moderate content (approve/reject)
export const moderateContent = (contentId, action) =>
  apiClient.post(`/content/${contentId}/moderate`, { action });
