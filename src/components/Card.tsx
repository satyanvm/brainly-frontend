import React from "react";
import { ShareIcon } from "./Icons/ShareIcon.tsx";
import {Tweet, TweetContainer } from 'react-tweet';
import CustomTwitterEmbed from "./TweetEmbed.tsx";
import { DeleteIcon } from "./Icons/DeleteIcon.tsx";
import { DeleteCard } from "../hooks/DeleteCard.tsx";
import { useContent } from "../hooks/useContent.tsx";
import axios from "axios";
interface CardProps{       
    title: string;                                 
    link: string;                                   
    type: "twitter" | "youtube";
}       

                     
// create a function that will extract the tweet-id from the tweet
function extractTweetId(url: string): string | undefined {
  const match = url.match(/\/status\/(\d+)/);
  return match ? match[1] : undefined;
}
         

// const CustomTweetContainer = (props: any) => (
//   <TweetContainer {...props} style={{ opacity: 1 }} />
// );
                         
export const Card = ({title, link, type}: CardProps) => {

                        
  console.log("Below is the link we are sending");
  console.log(link);
     
  return (
    <div className="font-medium">
      <div className=" p-4 bg-white rounded-md shadow-md border-gray-200 border max-w-72">
        <div className=" flex">
          <div className="flex items-center">
            <div className="text-gray-500 ">
                
            <ShareIcon size="md" />          
            </div>
            <div className="pl-2">
            {title}   
            </div>    
          </div>  
          <div className="flex pl-12">         
            <div className="pr-2 text-gray-500">
                 <a href = {link} target = "_blank">
                    <ShareIcon size = "md"/>
                 </a> 
              </div>  
                                                               
          </div>  
          <div className="cursor-pointer">
            <DeleteIcon thelink = {link} ></DeleteIcon>
          </div>  
        </div>     
         {      
         type === "youtube" &&   <iframe width="220" height="250" src={link.replace("youtu.be", "youtube.").substring(0,16) + "com/embed" + link.substring(16)} 
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         }         
  {type === "twitter" && 
    <Tweet id={extractTweetId(link)}  />  
  }              
</div>
      </div>  
     
  );
};
                    
