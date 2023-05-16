import { useState } from "react"

let Header=()=>{
    let[head,setHead]=useState(true);
    let outPut;
    // if(head){
    //     return(
    //         <div>
    //             <h1>the condition is true</h1>
    //             <button onClick={()=>{setHead(false)}} >change</button>
    //         </div>
    //     );
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>the condition is false</h1>
    //             <button onClick={()=>{setHead(true)}} >change</button>
    //         </div>
    //     );
    // }
    // if(head){
    //     outPut=<h1>the display is true</h1>
    // }
    // else{
    //     outPut=<h1>the display is false</h1>
    // }
    // return outPut;
    return head?
    (
        <div>
            <h1>the display is true//</h1>
        </div>
    ):(
        <div>
            <h1>the display is false</h1>
        </div>
    )
}
export default Header;