import React, { useState } from "react";

function Counter (){
    const [count,setCount]=useState(0);
    return (
        <div>
        <h1>count = {count}</h1>
        <div><button onClick={()=>{setCount(count+1)}}>add</button></div>
        </div>
    )
}

export default Counter;