import { Container, Nav,NavLink, Navbar, NavbarBrand } from "react-bootstrap"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
let NavigationTab=()=>{
    let myStyle={
        color:"white",
        fontSize:"30px"
    }
    let myStyle2={
        color:"white",
        fontSize:"20px"
    
    }
 return(
    <Container fluid className="bg-dark">
    <Navbar>
        <NavbarBrand style={myStyle}>Todoo...</NavbarBrand>
            <Nav className="ms-auto">
                <NavLink style={myStyle2} className="item"><Link to="/One">FORM</Link></NavLink>
                <NavLink style={myStyle2} className="item"><Link to="/Two">LIST ITEMS</Link></NavLink>
            </Nav>
    </Navbar>
</Container>
 )
}
export default NavigationTab