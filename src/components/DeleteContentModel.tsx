import axios from "axios";
import { Button } from "./Button";
import { findDocument } from "./Findcontent";
import { CrossIcon } from "./Icons/CrossIcon";
import mongoose from "mongoose";
           
interface deleteBrainModalProps{
    open: Boolean,
    onclose: any,
    link: String,
    contents: any,
    setContents: any,
    id: mongoose.Types.ObjectId | String
}

export function DeleteBrainModel(props: deleteBrainModalProps){
    console.log("below is the link we are sending to delete");
    console.log(props.link);
    console.log(" props.deleteBrainModal is " + props.open);

     return <div>        
            { 
                props.open &&  
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

                    <Button variant="primary" size="md" text="Delete card" onClick={async () => {
                          
                        // the logic to delete the card goes here
                      const mongoid = await findDocument(props.link);
                      console.log("the mongoid is" + mongoid);
                        axios.post('http://localhost:3000/api/v1/contentdelete',
                            { 
                                id: mongoid
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
                    
                        props.onclose();
}}> 
                    </Button>
    
                                    </div>
                                    </div>
                                    </span>
                                    </div>          
                                    </div>
                                    </div>
            }
        </div>
        
    }
    
