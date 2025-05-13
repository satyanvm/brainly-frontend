import { ReactElement } from "react"
import React from "react"
export function SidebarItem({text, icon}: {
    text: string,
    icon: ReactElement
}){
   
    return <div className="flex text-gray-800 py-1 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all ">
        <div className="font-bold pr-2">
            {icon} 
            </div>
            <div className="font-bold pl  ">
            {text}
            </div>
    </div>  
}



