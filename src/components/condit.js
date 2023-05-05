const { useState } = require("react")

let Conditional=()=>{
    let output;
    const[display,setDisplay]=useState(false);
    //************************************************** */
    // conditional rendering using if...statements
    // if(display){
    //     return(
    //         <div>
    //             <h1>display is true</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>display is false</h1>
    //         </div>
    //     )
    // }
    //*************************************************** */
     // conditional rendering using elements
    // if(display){
    //   output=<h1>display is true</h1>
    // }
    // else{
    //     output=<h1>display is false</h1>
    // }
    // return output
    //************************************************************** */
     // conditional rendering using tanary conditions
    return display ?
    (
        <div>
            <h1>display is true</h1>
        </div>
    ):(
        <div>
            <h1>display is false</h1>
        </div>
    );
}
export default Conditional;