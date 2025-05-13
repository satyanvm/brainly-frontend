import axios from "axios";
import { useEffect, useState } from 'react';
import {useQuery } from '@tanstack/react-query';
import jwt from "jsonwebtoken";

export function useContent() {
    const [contents, setContents] = useState([]);   
    const token = localStorage.getItem("token");    

     function refresh() {    
        console.log("the refresh function is indeed being called sir")
      
        if (!token) { 
            console.error("No token found. Please sign in.");
            return;
        }

 
    axios.get("http://localhost:3000/api/v1/content", {
        headers: { "Authorization": token }
    })
    .then((response) => {  
 
        setContents(response.data.content); 
    })
    .catch((error) => {
        console.error("Error fetching content:", error);
    });
    
    }
     useEffect(() => {
        refresh()

    }, []);
  
    return { contents, setContents, refresh }; 
}











