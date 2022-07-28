import react, { Component } from "react";
import Child from "./Child";

class ParentChildCommunication extends Component {
  constructor() {
    super();
    this.state = {
      name: "parent"
    };
    this.GreetParent = this.GreetParent.bind(this);
  }
  GreetParent() {
    console.log("parent called");
    alert(`hello i am ${this.state.name}`);
  }

  // if we want parameter from child just use callback function
  // in GreetParent from child like ()=>{GreetParent(props)}

  render() {
    return (
      <div>
        <Child GreetHandler={this.GreetParent} />
      </div>
    );
  }
}
export default ParentChildCommunication;
