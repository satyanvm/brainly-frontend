import axios from "axios";
import { useEffect, useState } from 'react';
export function useContent() {
    const [contents, setContents] = useState([]);   
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const token = localStorage.getItem("token");

    function refresh() {                     
        if (!token) { 
            console.error("No token found. Please sign in.");
            return;
        }

        setShouldRefresh(false);

        axios.get("http://localhost:3000/api/v1/content", {
            headers: { "Authorization": token },
        })
        .then((response) => {
            setContents(response.data.content); 
        })
        .catch((error) => {
            console.error("Error fetching content:", error);
            setShouldRefresh(true);
        });
    }

    // useEffect(() => {      
    //     if (shouldRefresh) {
    //         refresh();
    //     }
    // }, [shouldRefresh]);

    return { contents, setContents, refresh }; // ✅ Expose setContents
}
