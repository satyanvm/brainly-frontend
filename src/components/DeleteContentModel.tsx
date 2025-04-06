import axios from "axios";
import { Button } from "./Button";
import { findDocument } from "./Findcontent";
import { CrossIcon } from "./Icons/CrossIcon";

interface deleteBrainModalProps{
    open: Boolean,
    onclose: any,
    link: String,
    contents: any,
    setContents: any
}

export function DeleteBrainModel(props: deleteBrainModalProps){

     return     <div>
            {
                props.open && 
                <div className="bg-black opacity-100">
                <div className="w-screen h-screen bg-black fixed top-0 left-0 flex justify-center">
                </div> 
                    <div className="bg-black opacity-100 h-screen w-screen fixed top-0 left-0 flex justify-center">
                     <div className="flex flex-col justify-center">
                     <span className="bg-white p-4 rounded"> 
                     <div className=" justify-end">  
                      <div className="cursor-pointer" onClick={onclose}>   
                                    <CrossIcon />       
                                    </div>              
                                    <br /> 
                                    <div className="cursor-pointer">

                    <Button variant="primary" size="md" text="Delete card" onClick={async () => {
                    
                        // the logic to delete the card goes here
                    
                        const id = await findDocument(props.link);
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
    
