import React, { useRef, useState } from "react";
 

export default function AddCar({handle}){
    const newcar=useRef()
    function preHandler(){
        let n=newcar.current.value;
        console.log(n);
        handle(n);
    }
    return (
        <div className="flex space-x-3">
          <input ref={newcar} type="text" className="rounded-md"/>
          <button onClick={preHandler}className="px-4 py-2 rounded-sm bg-blue-500 rounded-md" >Add</button>
        </div>
    )
}