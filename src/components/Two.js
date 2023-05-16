import { Button, Card, Container } from "react-bootstrap"

let MyItems=({show})=>{
    let object= show.map(
        (show)=>(
            <Container className="offset-2">
                <Card className="mt-3 col-10" style={{padding:"15px"}}>
                    <Container>
                       <div className="row">
                            <div className="col-9">{show}</div>
                            <div className="col-3"><Button variant="danger">DONE</Button></div>
                       </div>
                    </Container>
                </Card>
            </Container>
        )
    )
    return(
     <div>
        {object}
     </div>
    )
}
export default MyItems