import React, { useState } from 'react'
import Car from './Car'
import AddCar from './AddCar';

function Cars() {

   const [cars,setCars]=useState([ ])
   let [updateCar,setUpdateCar]=useState({});
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

function ShowupdateCarHandler(car){
  setUpdateCar(car);
    
   }

   function updateCarHandler(car){
    let carIndex = cars.findIndex((obj => obj.id == car.id));
    console.log(car);
    console.log(carIndex);
    setUpdateCar({});
      
     }
     function CancleUpdateCarHandler(){
     
      setUpdateCar({});
        
       }
    return (
      <div>
        <div><AddCar addHandler={addnewcarHandle} updateHandler={updateCarHandler} car={updateCar} cancelUpdate={CancleUpdateCarHandler}/></div>
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
                return ( <Car car={item} key={keys} deleteHandler={deletCarHandler}  updateHandler={ShowupdateCarHandler}/>)
            })
            }
          </tbody>
        </table>
      </div>
    )
}

export default Cars