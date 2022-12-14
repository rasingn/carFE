import React from "react";

export default function Car({car,deleteHandler,updateHandler}){
    function Delete(){
        deleteHandler(car.id)
    }
    function Update(){
        updateHandler(car)
    }
    return(
        <tr className='border-b hover:bg-gray-50'>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.id}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{car.name}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a onClick={Delete}><i className="las la-times text-red-500 hover:text-green-600"></i></a>
                <a onClick={Update}><i className="las la-pen text-blue-500 hover:text-orange-600"></i></a>
                </td>
        </tr>
    )
}
