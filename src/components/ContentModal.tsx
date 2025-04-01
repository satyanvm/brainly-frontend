import { useRef, useState } from "react";
import React from "react";
import { CrossIcon } from "./Icons/CrossIcon.tsx";
import { InputComp } from "./InputComp.tsx";
import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";
import { BACKEND_URL } from "./Config.ts";
import axios from "axios";                                             
enum ContentType{         
    Youtube = "youtube",    
    Twitter = "twitter"     
}           
            
export function CreateContentModal({open,  onclose }: {open: boolean, onclose: () => void}){  
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    const [type, setType] = useState(ContentType.Youtube);
    
    async function deleteContent(){
            
        await axios.post(`http://localhost:3000/api/v1/contentdelete`,
            {                            
          contentId, userId         
            },{   
                headers: {
                    "Authorization": localStorage.getItem("token")
                }    
            }     
        )                                                        

    }


    async function addContent(){                      
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        console.log("add content called");  
        if(type == "youtube"){  
            await axios.post(`http://localhost:3000/api/v1/content`,
                {                           
                 link,title,type ,             
                },{   
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }    
                }     
            )
                   
            onclose();
        } else{
            await axios.post(`http://localhost:3000/api/v1/content`,
                {                           
                 link,title,type                    
                },{   
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                } 
            )
            onclose();    
            } 
    }

    return <div> 
        {open && 
        <div>
        <div className = "opacity-90 w-screen h-screen bg-slate-500 fixed top-0 left-0 flex justify-center">
      </div>                                     

      <div className="opacity-100 h-screen w-screen fixed top-0 left-0 flex justify-center">
      <div className="flex flex-col justify-center">
          <span className="bg-white opacity-100 p-4 rounded"> 
            <div className="flex justify-end">  
                <div className="cursor-pointer" onClick={onclose}>       
                <CrossIcon/>  
                </div>
            </div>
            <div>    
                <Input  ref = {titleRef} placeholder = {"Title"}></Input>
                <Input ref = {linkRef} placeholder = {"LInk"}></Input>

            </div> 
            <div>
                <h1>Type</h1>
                <br/>
                <div className="flex">        
                <div className="pl-4">
                <Button onClick={() => {
                    setType(ContentType.Youtube);
                }} size = "sm" text = "Youtube" variant = {type === ContentType.Youtube? "primary" : "secondary"}></Button>
                </div>
<div className="pl-4">
                             <Button onClick = {() => {
                     setType(ContentType.Twitter);
                }
            }
                    text = "Twitter" size = "sm" variant = {type === ContentType.Twitter? "primary" : "secondary"}></Button>
                    </div>
            </div>
            </div>
            <div className="flex justify-center pt-4">
            <Button onClick = {addContent} variant = "primary" text = "Submit" size = "md"/>
            </div>
      </span>
      </div>   
      </div>
      </div>
    }      
    </div>
}
