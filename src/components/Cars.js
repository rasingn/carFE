import React, { useEffect, useState } from 'react'
import Car from './Car'
import AddCar from './AddCar';
import axios from 'axios';
import uniqid from 'uniqid'
function Cars() {

  const [cars, setCars] = useState([])
  let [updateCar, setUpdateCar] = useState({});
 
 
  const loadCars=() => {
    axios.get('http://localhost:3055/cars')
      .then(res => {
        console.log(res);
        setCars(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  useEffect(loadCars, [])

  function addnewcarHandle(newCar) {
    
     axios.post('http://localhost:3055/cars',newCar)
     .then(res => {
      loadCars()
  
    })
    .catch(err => {
      console.log(err);
    })
  }

  function deletCarHandler(id) {
    axios.delete('http://localhost:3055/cars/'+id)
    .then(res => {
     loadCars()
 
   })
   .catch(err => {
     console.log(err);
   })
  }

  function ShowupdateCarHandler(car) {
    setUpdateCar(car);

  }

  function updateCarHandler(car) {
    axios.patch('http://localhost:3055/cars',car)
    .then(res => {
     loadCars()
 
   })
   .catch(err => {
     console.log(err);
   })
    setUpdateCar({});

  }
  function CancleUpdateCarHandler() {

    setUpdateCar({});

  }
  return (
    <div>
      <div><AddCar addHandler={addnewcarHandle} updateHandler={updateCarHandler} car={updateCar} cancelUpdate={CancleUpdateCarHandler} /></div>
      <table className='table w-full'>
        <thead className='border-b'>
          <tr>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>id</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>name</th>
            <th className='text-sm font-medium text-gray-900 px-6 py-4 text-left'>action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item, keys) => {
            return (<Car car={item} key={keys} deleteHandler={deletCarHandler} updateHandler={ShowupdateCarHandler} />)
          })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cars