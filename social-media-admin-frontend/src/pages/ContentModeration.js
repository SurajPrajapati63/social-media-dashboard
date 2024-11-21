import React, { useState, useEffect } from "react";
import { fetchContent, moderateContent } from "../services/api"; // Import API functions

const ContentModeration = () => {
  // Initialize content as an empty array to prevent 'undefined' errors
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch content for moderation
    fetchContent()
      .then((data) => {
        // Ensure data is an array before setting it to state
        if (Array.isArray(data)) {
          setContent(data);
        } else {
          console.error("Invalid content data format");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setLoading(false);
      });
  }, []);

  // Handle content moderation (approve/reject)
  const handleModeration = (contentId, action) => {
    moderateContent(contentId, action)
      .then(() => {
        setContent((prevContent) =>
          prevContent.map((item) =>
            item._id === contentId ? { ...item, status: action } : item
          )
        );
      })
      .catch((error) => {
        console.error("Error moderating content:", error);
      });
  };

  if (loading) {
    return <div>Loading content...</div>;
  }

  return (
    <div>
      <h1>Content Moderation</h1>
      <ul>
        {/* Ensure content is an array before calling .map() */}
        {Array.isArray(content) && content.length > 0 ? (
          content.map((item) => (
            <li key={item._id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <p>Status: {item.status}</p>
              <button onClick={() => handleModeration(item._id, "approved")}>
                Approve
              </button>
              <button onClick={() => handleModeration(item._id, "rejected")}>
                Reject
              </button>
            </li>
          ))
        ) : (
          <div>No content found for moderation.</div>
        )}
      </ul>
    </div>
  );
};

export default ContentModeration;
