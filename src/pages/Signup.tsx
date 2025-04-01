import { Button } from "../components/Button.tsx";
import { Input } from "../components/Input.tsx";
import "../App.css";
import React, { useRef } from "react";
import { BACKEND_URL } from "../components/Config.ts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup(){

    const usernameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null); 
    const navigate = useNavigate();
    async function signup() {
         
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log(usernameRef.current.value);
        try{
        await axios.post( BACKEND_URL + "/api/v1/signup", { 
                username,
                password       
        }).then(() => {
            navigate("/signin");
        })
    } catch(e){
        alert("caught in try block");
        console.log("caught in try block sir");
        console.log(e);

    }
    }   
        
        

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className=" p-8 bg-white rounded-2xl">
        <Input ref = {usernameRef} placeholder="Username"></Input>
        <Input ref = {passwordRef} placeholder="Password" ></Input> 
        <div className="flex justify-center">
        <Button onClick={signup} fullWidth = {true} variant =  "primary" text = "Signup" size = "md" loading={false}/>              
        </div>
        </div> 
    </div>
}
      
          

