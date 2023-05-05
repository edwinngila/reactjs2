import { useState } from "react";
let Persons=()=>{
    const text={
      color:"green",
      fontSize:30,
      fontFamily:"sans-serif",
      backgroundColor:"black"
    }
    const [person,setColor]= useState({
        fname:"edwin",
        sname:"ngila",
        course:"software Development"

});
    return(
       <div>
          <p style={text}>
            the name of the student is :{person.fname} {person.sname} and takes {person.course}
          </p>
       </div>
    );
}
export default Persons