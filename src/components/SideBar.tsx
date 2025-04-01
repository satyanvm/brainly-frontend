import React from "react" 
import { YoutubeIcon } from "./Icons/YoutubeIcon.tsx"
import { SidebarItem } from "./SideBarItem.tsx"
import { TwitterIcon } from "./Icons/TwitterIcon.tsx"
import { Logo } from "./Icons/Logo.tsx"
export function Sidebar(){ 
    return <div className="h-screen bg-white w-72 fixed left-0 top-0 border-r-green-500 pl-6 ">
        <div className="flex pt-8  ">
       <div className=" pr-1 text-purple-600">
        <Logo/>
       </div>
        <div className="flex text-2xl pl-1 text-gray-800">
            Brainly
        </div>
        </div> 
        <div className = "pt-4 text-gray-100 pl-4">
            <SidebarItem text = "Twitter" icon = {<TwitterIcon />} />
            <SidebarItem text = "Youtube" icon={<YoutubeIcon/>} />
        
        </div>
    </div>      
} 

