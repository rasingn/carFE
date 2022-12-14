import React, { useState } from 'react'
import Car from './Car'
import AddCar from './AddCar';

function Cars() {

   const [cars,setCars]=useState([ ])

function addnewcarHandle(name){
    let newid=cars.length>0?cars[cars.length-1].id+1:1
    setCars(x=>{
        return [...cars,{id:newid,name:name}]
    })
    console.log(cars);
}

function deletCarHandler(id){
 setCars(cars.filter((car)=>{
    return car.id!=id;
   }))
}

function showUpdateCarHandler(){
 console.log("hi");
   }
    return (
      <div>
        <div><AddCar handle={addnewcarHandle} /></div>
        <table className='table w-full'>
          <thead className='border-b'>
            <tr>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>id</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>name</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item,keys) =>{
                return ( <Car car={item} key={keys} deletehandler={deletCarHandler}  showUpdateCarHandler={showUpdateCarHandler}/>)
            })
            }
          </tbody>
        </table>
      </div>
    )
}

export default Cars