import React from "react";
export function Input({ placeholder, ref}: {placeholder: string; ref?: any; }){
    return <div>
        <input ref = {ref} placeholder={placeholder} type = {"text"} className="px-4 py-2 border rounded m-2">
        </input>
    </div>
}
