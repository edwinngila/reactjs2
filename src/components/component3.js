import { Component } from "react";

class Price extends Component{
    constructor(){
        super()
        this.state={
            total:0
        }
    }
    calc(one,two){
     this.setState({
        total:one+two
     })
    }
    render(){
        return(
            <div>                
                <h1>the total is : {this.state.total}</h1>
                <button onClick={()=>{this.calc(500,100)}}>calc</button>
            </div>
        )
    }
}
export default Price