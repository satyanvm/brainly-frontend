import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from './Card.tsx';
import axios from "axios";
  
function Claudehash() {
  const { shareLink } = useParams<{ shareLink: string }>(); 
  const navigate = useNavigate();
  const [sharedContent, setSharedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchSharedContent = async () => {
      try {
        console.log("Fetching content for shareLink:", shareLink);
        const response = await axios.get(`http://localhost:3000/api/v1/brain/${shareLink}`);
        
        const id = response.data?.userid;
        console.log("User ID from response:", id);
        
        // Assuming response.data.content is an array of content items
        setSharedContent(response.data.content);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching shared content:", err);
        setError("Failed to load shared content");
        setIsLoading(false);
      }
    };
    
    fetchSharedContent();
  }, [shareLink]);
  
  if (isLoading) {
    return <div>Loading shared content...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      {sharedContent.length > 0 ? (
        sharedContent.map((item, index) => (
          <div key={index}>
            <Card
              title={item.title}
              link={item.link}
              type={item.type}
            />
          </div>
        ))
      ) : (
        <div>No shared content available</div>
      )}
    </div>
  );
}

export default Claudehash;