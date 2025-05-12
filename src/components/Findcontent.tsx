export async function findDocument(link: String) {
  try {  
      console.log("see see");
      console.log(link);
 
      const response = await fetch(`http://localhost:3000/api/v1/findcontent?link=${(link)}`);
      if (!response.ok) {
        console.log("network response was not ok line");              
          throw new Error("Network response was not ok");
      } 
      const data_1 = await response.json();  
      const id = data_1.response._id; 
      console.log("findDocument log is here");
      
      console.log(data_1);
      console.log((await response));
      // console.log(data_1.response._id);
      // console.log(data_1);
      return id;    

  } catch (error) { 
      console.error("Error fetching document:", error);
      throw error;
  }
}
