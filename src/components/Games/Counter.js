import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex  justify-center ">
      <div className="m-auto">
        <div>
          <h1>count = {count}</h1>
        </div>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className=" btn-primary"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
