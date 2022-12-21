import React from "react";

export default function Car({car,deleteHandler,updateHandler}){
    function Delete(){
        deleteHandler(car.id)
    }
    function Update(){
        updateHandler(car)
    }
    return(
        <tr className='border-b border-skin-muted hover:bg-skin-button-accent-hover '>
            <td className="table-td">{car.id}</td>
            <td className="table-td">{car.brand}</td>
            <td className="table-td flex gap-1">
                <button onClick={Delete}><i className="las la-times  p-1 bg-skin-fill rounded-sm  text-skin-base  translate hover:scale-125 transition ease-in"></i></button>
                <button onClick={Update}><i className="las la-pen  p-1 bg-skin-fill rounded-sm  text-skin-base   translate hover:scale-125 transition ease-in"></i></button>
                </td>
        </tr>
    )
}
