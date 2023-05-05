import { Component } from "react";
class States extends Component{
   constructor(){
    super();
    this.state={
     time:0
    };
   }
   // increase(){
   //    this.setState({
   //       counter:this.state.counter+1
   //    });
   // }
   currentTime(){
    this.setState({
      time:Date()
    })
    this.timeCounter()
   }
   timeCounter(){
      setInterval(()=>{this.currentTime()},1000)
   }
   render(){
      return(
         <div>
            <h1 onLoad={this.currentTime()}>The time is: {this.state.time}</h1>
         </div>
      );
   }
}
export default States;