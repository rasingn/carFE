import React, { useEffect, useRef } from "react";

export default function AddCar({
  addHandler,
  updateHandler,
  cancelUpdate,
  car,
}) {
  const carNameRef = useRef();

  function add() {
    let newCar = {};
    newCar.brand = carNameRef.current.value;
    carNameRef.current.value = "";
    addHandler(newCar);
  }
  function update() {
    car.brand = carNameRef.current.value;
    updateHandler(car);
    carNameRef.current.value = "";
  }
  function cancel() {
    carNameRef.current.value = "";
    cancelUpdate();
  }

  useEffect(() => {
    if (car.id != null) carNameRef.current.value = car.brand;
  }, [car]);

  return (
    <div className="">
      <input
        ref={carNameRef}
        type="text"
        className="rounded-md border-skin-fill "
      />
      <div className="mt-4">
        {car.id == null ? (
          <button onClick={add} className="btn-primary">
            Add
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={update} className="btn-primary">
              Update
            </button>
            <button onClick={cancel} className="btn-secondary">
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
