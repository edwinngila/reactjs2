import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

let Forms=({list,setList,show,setShow})=>{
return(
<div className="bg-warning col-5 offset-4 mt-3" style={{height:"250px"}}>
<Container className="" >
    <Form onSubmit={(e)=>{
        e.preventDefault();
        setShow([...show,list]);
        setList(" ")
        console.log(show)
    }}>
        <FormGroup>
            <FormLabel style={{fontSize:"20px"}}>TODOO ITEMS...</FormLabel>
            <FormControl type="text" value={list} onChange={(e)=>{setList(e.target.value)}}></FormControl>
        </FormGroup>
        <FormGroup> 
            <Button variant="success" className="mt-3" type="submit">ADD TO LIST</Button>
        </FormGroup>
    </Form>
 </Container>
</div>
)
}
export default Forms