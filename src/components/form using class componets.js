const { Component } = require("react");

class Form extends Component{
     state={
        firstName:"",
        secondName:"",
     }
    handalInput1=(event)=>{
        this.setState({
            firstName:event.target.value,
            
    })
        
    }
    handalInput2=(event)=>{
        this.setState({
            secondName:event.target.value,
    })
        
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log({
         firstName: this.state.firstName,
         secondName: this.state.secondName
        })
    }
    render(){
        return(
            <div>
                <h1>form using class component</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.firstName} onChange={this.handalInput1} ></input>
                    <input type="text" value={this.state.secondName} onChange={this.handalInput2}></input>
                    <p>first name: {this.state.firstName}</p>
                    <p>second name: {this.state.secondName}</p>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default Form