import { Component } from "react";

class Counters extends Component{
    state={
            counter:0
    }
    update(){
        this.setState({
            counter:this.state.counter+1
        });
    }
    render(){
        return(
            <div>
                <h1>the counter value is :{this.state.counter}</h1>
                <button onClick={()=>{this.update()}}>click me</button>
            </div>
        );
    }
}
export default Counters;