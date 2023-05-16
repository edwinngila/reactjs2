import { useState } from "react"

let Form2=()=>{
    const[firstName,setFistName]=useState("")
    const[secondName, setSecondName]=useState("")
    return(
        <div>
            <h1>forms using factional component</h1>
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log({firstName},{secondName})}}>
                 <input type="text" value={firstName} onChange={(e)=>{setFistName(e.target.value)}}></input>
                 <input type="text" value={secondName} onChange={(e)=>{setSecondName(e.target.value)}}></input>
                 <p>first name: {firstName}</p>
                 <p>second name: {secondName}</p>
                 <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Form2