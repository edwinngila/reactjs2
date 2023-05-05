const { Component } = require("react");

class Persons extends Component{
  render(){
    return(
        <div>
            <h1>The persons name is:{this.props.name}</h1>
        </div>
    );
  };
}
export default Persons;