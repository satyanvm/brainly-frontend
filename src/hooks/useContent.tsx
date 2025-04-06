import axios from "axios";
import { useEffect, useState } from 'react';
import {useQuery } from '@tanstack/react-query';
export function useContent() {
    const [contents, setContents] = useState([]);   
    const [shouldRefresh, setShouldRefresh] = useState(true);
    const token = localStorage.getItem("token");



    useEffect(() => {      
        refresh();
    }, [shouldRefresh]);

     function refresh() {    
        
      
        if (!token) { 
            console.error("No token found. Please sign in.");
            return;
        }

        // setShouldRefresh(false);

            axios.get("http://localhost:3000/api/v1/content", {
                headers: { "Authorization": token },
            })
            .then((response) => {
    
                setContents(response.data.content); 
                setShouldRefresh(false);
            })
            .catch((error) => {
                console.error("Error fetching content:", error);
                // setShouldRefresh(false);
            });


        // const { data: contents, isLoading } = useQuery({
        //     queryKey: ['contents'],
        //     queryFn: someFetching,
        // });
    
    }
  

    return { contents, setContents, refresh, shouldRefresh }; 
}
