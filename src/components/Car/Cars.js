import React, { useEffect, useState } from "react";
import Car from "./Car";
import AddCar from "./AddCar";
import axios from "axios";
import * as Constant from "../../Config/Constant";
import { toast } from "react-toastify";
function Cars() {

  const [cars, setCars] = useState([]);
  let [updateCar, setUpdateCar] = useState({});

  console.log(Constant.API_URL);
  const loadCars = () => {
    axios
      .get(Constant.API_URL + "/")
      .then((res) => {
        console.log(res);
        setCars(res.data);
       
      })
      .catch((err) => {
        console.log(err);
        toast.error('ops');
      });
  };
  useEffect(loadCars, []);

  function addnewcarHandle(newCar) {
    axios
      .post(Constant.API_URL + "/", newCar)
      .then((res) => {
        loadCars();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deletCarHandler(id) {
    axios
      .delete(Constant.API_URL + "/" + id)
      .then((res) => {
        loadCars();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function ShowupdateCarHandler(car) {
    setUpdateCar(car);
  }

  function updateCarHandler(car) {
    axios
      .patch(Constant.API_URL + "/", car)
      .then((res) => {
        loadCars();
      })
      .catch((err) => {
        console.log(err);
      });
    setUpdateCar({});
  }
  function CancleUpdateCarHandler() {
    setUpdateCar({});
  }
  return (
    <div className="grid grid-cols-4 divide-x-2 ">
      <div className="col-span-1 p-6 flex items-center">
      <div>
      <p className="text-skin-inverted mb-5 uppercase">
          Here you can insert new car and update car
        </p>
        <AddCar
          addHandler={addnewcarHandle}
          updateHandler={updateCarHandler}
          car={updateCar}
          cancelUpdate={CancleUpdateCarHandler}
        />
      </div>
      </div>
      <div className=" col-span-3 p-6">
      <table className="table w-full">
        <thead className="border-b">
          <tr>
            <th className="table-th">
              id
            </th>
            <th className="table-th">
              name
            </th>
            <th className="table-th">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item, keys) => {
            return (
              <Car
                car={item}
                key={keys}
                deleteHandler={deletCarHandler}
                updateHandler={ShowupdateCarHandler}
              />
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Cars;
