import React, { useEffect, useRef, useState } from "react";
import { ShareIcon } from "./Icons/ShareIcon.tsx";
import {Tweet, TweetContainer } from 'react-tweet';
import CustomTwitterEmbed from "./TweetEmbed.tsx";
import { DeleteIcon } from "./Icons/DeleteIcon.tsx";
import { useContent } from "../hooks/useContent.tsx";
import axios from "axios";
import { DeleteBrainModel } from "./DeleteContentModel.tsx";
import { findDocument } from "./Findcontent.tsx";
import mongoose from "mongoose"; 
interface CardProps{    
    id: string,     
    title: string;                                 
    link: string;                                   
    type: "twitter" | "youtube";
    contents: any,
    setContents: any, 
    deleteBrainModal: any,
    setDeleteBrainModal: any  ,
    shouldRefresh: any,
    setShouldRefresh: any ,
    setIsDelete: any
 }           
    
                         
// create a function that will extract the tweet-id from the tweet 
function extractTweetId(url: string): string | undefined {
  const match = url.match(/\/status\/(\d+)/);
  return match ? match[1] : undefined;
}
         

// const CustomTweetContainer = (props: any) => (
//   <TweetContainer {...props} style={{ opacity: 1 }} />
// ); 
                         
export const Card = (props: CardProps) => {
  const hasRunRef = useRef(false);     
  console.log("Below is the link we are sending");
  console.log(props.link);
          
// useEffect(() => {   
//   if (!hasRunRef.current) { 
//     console.log("before findDocument");
//      findDocument(props.link).then((res) => {
//   console.log("again the link is below hehe");    
//   console.log(props.link);
//     console.log("below is the res");
//     console.log(res);  
//     hasRunRef.current = true;          
//    })    
//    .catch((err) => {    
//     console.error("error in findDocument:", err);
//   });
// }
// }, []);    
     
    return ( 
      <div className="font-medium">
        <div className=" p-4 bg-white rounded-md shadow-md border-gray-200 border max-w-72">
          <div className=" flex">
            <div className="flex items-center">
              <div className="text-gray-500 ">
              <ShareIcon size="md" />          
              </div>
              <div className="pl-2">
              {props.title}   
              </div>    
            </div>   
            <div className="flex pl-12">         
              <div className="pr-2 text-gray-500">
                  <a href = {props.link} target = "_blank">
                      <ShareIcon size = "md"/>
                  </a> 
                </div>  
                                                                        
            </div>    
            <div className = "cursor-pointer">
              <div> 
            
              <DeleteIcon setIsDelete = {props.setIsDelete} onclose = {() => {
                try{
                  props.setDeleteBrainModal(false);
                
                } catch(e){
                  console.log("the error from onclose is " + e);
                }
            }} deleteBrainModal = {props.deleteBrainModal} contents ={props.contents} setContents={props.setContents} setDeleteBrainModal = {props.setDeleteBrainModal}   thelink = {props.link} ></DeleteIcon>  

              {/* <DeleteBrainModel id = {id} open = {props.deleteBrainModal} onclose={() => {
                      props.setDeleteBrainModal(false); 
                  }}  contents = {props.contents} setContents={props.setContents} ></DeleteBrainModel> */}
              </div>

            </div>    
          </div>         
          {        
          props.type === "youtube" &&   <iframe width="220" height="250" src={props.link.replace("youtu.be", "youtube.").substring(0,16) + "com/embed" + props.link.substring(16)} 
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          }         
    {props.type === "twitter" && 
    //@ts-ignore
      <Tweet id={extractTweetId(props.link)}  />  
    }              
  </div>
        </div>  
      
    );
};
                    
