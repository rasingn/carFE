import React, { useEffect, useRef, useState } from "react";
 

export default function AddCar({addHandler,updateHandler,cancelUpdate,car}){
    const carNameRef=useRef()
    
    function add(){
        let n=carNameRef.current.value;
        carNameRef.current.value=""
        addHandler(n);
    }
    function update(){
        car.name=carNameRef.current.value
        updateHandler(car);
        carNameRef.current.value=""
    }
    function cancel(){
        carNameRef.current.value=""
        cancelUpdate();
    }

    useEffect(()=>{
        if(car.id!=null)
        carNameRef.current.value=car.name;
    },[car])
    
    return (
        <div className="flex space-x-3">
          <input ref={carNameRef} type="text" className="rounded-md"  />
          {car.id==null?<button onClick={add}className="px-4 py-2 rounded-sm bg-blue-500 rounded-md" >Add</button>:
        <><button onClick={update}className="px-4 py-2 rounded-sm bg-green-500 rounded-md" >Update</button>
        <button onClick={cancel}className="px-4 py-2 rounded-sm bg-red-500 rounded-md" >Cancel</button></>
    }
        </div>
    )
}