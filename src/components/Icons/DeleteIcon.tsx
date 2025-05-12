
import { Dispatch, SetStateAction, use, useEffect, useState, memo } from "react";
import { useContent } from "../../hooks/useContent";
import mongoose from "mongoose";
import axios from "axios";
import { findDocument } from "../Findcontent";
import { DeleteBrainModel } from "../DeleteContentModel";
import { Button } from "../Button";
import { CrossIcon } from "./CrossIcon";

interface deleteIconProps{
thelink:string ,
setDeleteBrainModal: any,
setContents: any,
contents: any,
deleteBrainModal: any,
onclose: any,
setIsDelete: any
}    

        
export const DeleteIcon = memo(function DeleteIcon(props: deleteIconProps) {
        const { contents,refresh, setContents } = useContent(); 
        console.log("Deleteicon component is rendered"); 


        async function deleteCard(){
         console.log("here it's before the deleteCard operation in deleteBrainModal");
                        console.log("the link propagated to the return jsx section is " + props.thelink);
try{    
   const id = await findDocument(props.thelink);
            console.log("the id which is being propped to findDocument is" + props.thelink);
            console.log("the id which findDocument is returning is " + id );
            axios.post('http://localhost:3000/api/v1/contentdelete',         
                { 
                    id: id            
                },
                {   
                    headers: {
                        "Authorization": localStorage.getItem("token") 
                    }    
                } 
            )                         
            .then((response) => {   
                props.setContents(response.data.contents);
                props.setDeleteBrainModal(false); 
                props.setIsDelete(true);
            })
            .catch(error => console.error("Error deleting content:", error));
        } catch(e){
            console.log(e);
            return;
        }
                            
        setTimeout(() => {
            refresh()
        },1000);
     console.log("here it's after the deletecard operation in deleteBrainModal ");
    }          

        
    console.log(" props.thelink from deleteIcon is " + props.thelink );

//   useEffect(() => {
//     if (!props.deleteBrainModal) {
//     }
//   }, [props.deleteBrainModal, refresh]);


  
    return <div onClick={() => {
        deleteCard();
    
// props.setDeleteBrainModal(true);     
    }}>   
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg> 
       </div>  
})
        