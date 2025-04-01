import axios from "axios";

 
 
 export function findDocument(link: String) {
    try {
        console.log("see see");
      console.log(link);
    const response =  axios.get("http://localhost:3000/api/v1/findcontent", {
       link: link
      }
    ).then((response) => { 
        
            const id = response.data._id;
            return id;
            })
    
    } catch (error) {
      console.error("Error fetching document:", error);
      throw error;  
    }
  }