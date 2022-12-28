import React from "react";
import { toast } from 'react-toastify';

export default function Home() {
  return (
    <div>
      <img
        src="assets/imgs/bg.png" alt="bg"
        className="absolute w-full h-full object-cover left-0 bottom-0 top-0 -z-10"
      ></img>
      <div className="grid grid-cols-2 items-center h-screen">
        <div className="col-span-1 -mt-6">
          <p className="text-skin-inverted font-bold uppercase text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            excepturi.
          </p>
          <div>
       </div>
        </div>
      </div>
    </div>
  );
}
