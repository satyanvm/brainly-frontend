
import axios from "axios";
import { useContent } from "./useContent";
import mongoose from "mongoose";
import { Dispatch, SetStateAction } from "react";

export function DeleteCard(id: mongoose.Types.ObjectId, refresh: () => void, contents: any[], setContents: Dispatch<SetStateAction<never[]>>){

     axios.post('http://localhost:3000/api/v1/contentdelete',
        { 
            id: id  
        } ,
        { 
                headers:{
                    "Authorization": localStorage.getItem("token")
                } 
    }
      ) 
      .then(() => { 
        // setContents(filteredContents);
        refresh();
       })
      .catch(error => console.error("Error deleting content:", error));}


