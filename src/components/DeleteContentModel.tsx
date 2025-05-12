import axios from "axios";
import { Button } from "./Button";
import { findDocument } from "./Findcontent";
import { CrossIcon } from "./Icons/CrossIcon";
import mongoose from "mongoose";
            
interface deleteBrainModalProps{
    open: Boolean, 
    onclose: any,
    // contents: any,
    setContents: any,
    id: any
    // id: mongoose.Types.ObjectId | String
}

export function DeleteBrainModel(props: deleteBrainModalProps){
    console.log(" props.deleteBrainModal is " + props.open);  
    console.log("the id coming from deleteicon to deleteBrainModal is" + props.id);
    async function deleteCard(id: mongoose.ObjectId ){  

        console.log("the id from deletecard from deleteBrainModel is " + props.id);
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
        })
        .catch(error => console.error("Error deleting content:", error));
    }
    // console.log("below is props.id from deleteBrainModal");      
    // console.log(props.id);
    
     return         (     
                                    
                props.open &&      
                (  
                <div className="bg-black opacity-100"> 
                <div className="w-screen h-screen bg-black fixed top-0 left-0 flex justify-center">
                </div> 
                    <div className="bg-black opacity-100 h-screen w-screen fixed top-0 left-0 flex justify-center">
                     <div className="flex flex-col justify-center">
                     <span className="bg-white p-4 rounded"> 
                     <div className=" justify-end">         
                      <div className="cursor-pointer">    
                                    <CrossIcon  onclose ={ props.onclose}/>       
                                    </div>              
                                    <br /> 
                                    <div className="cursor-pointer">

                    <Button variant="primary" size="md" text="Delete card" onClick={async () =>
                     {
                        console.log("here it's before the deleteCard operation in deleteBrainModal");
                            deleteCard(props.id);
                            console.log("here it's after the deletecard operation in deleteBrainModal ");
                    }
                }
> 
                    </Button>
    
                                    </div>
                                    </div>
                                    </span>
                                    </div>          
                                    </div>
                                    </div>)
     )
            }
        
    
