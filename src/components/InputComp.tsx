import React from "react"
export function InputComp({onChange, placeholder}: {onChange: () => void}){
    return <div>
        <input placeholder={ placeholder} type = {"text"} className="px-4 py-2 border rounded-md m-2" onChange={onchange}></input>
    </div> 
}

                