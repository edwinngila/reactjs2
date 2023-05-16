import { useState } from "react"

let Count=()=>{
    const[counter,setCounter]=useState(0);
    return(
        <div>
            <h1>the counter:{counter}</h1>
            <button onClick={()=>{setCounter(counter+1)}}  >click me</button>
        </div>
    );
}
export default Count;