import React, { useState } from "react";
import { CrossIcon } from "./Icons/CrossIcon.tsx";
import axios from "axios";
import { Button } from "./Button.tsx";
import { set } from "mongoose";

export function ShareContentModel({open,  onclose , shareUrl}: {open: boolean, onclose: () => void, shareUrl: string}){
    //  const [shareUrl, setShareUrl] = useState("");
    
    function shareContent(){    
        onclose();
    }

    return     <div>
        {
            open && 
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
                                   <Button variant = "primary" size = "md" text = "Copy link" onClick={async () => {
                                                                         onclose()      
                            //   const response = await axios.post('http://localhost:3000/api/v1/brain/share', {
                            //             share: true,
                            //             userId: "ObjectId('67cc525aaa297042d30644eb')"
                            //          },{
                            //             headers: {  
                            //                 "Authorization": localStorage.getItem("token")
                            //             }
                            //          });             
                            //          if(response.data){
                            //             const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                            //             console.log("Below is the shareurl");
                            //             co   nsole.log(shareUrl);
                            //             // alert(`your share url is ${shareUrl}`);
                            //          } else{
                            //            alert("Response is empty");
                            //          }
                            navigator.clipboard.writeText(shareUrl);
                                   
                                    }
                                   }>  </Button> 
                                  Your url is http://localhost:5173/share/${shareUrl}

                                </div>
                                </div>
                                </span>
                                </div>  
                                </div>
                                </div>
        }
    </div>
    
}

<div className="bg-slate-500 opacity-100 ">

</div>