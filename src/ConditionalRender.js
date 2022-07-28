import { Component } from "react";

class ConditionalRender extends Component {
  constructor(props) {
    super(props.status);

    this.state = {
      isLoggedIn: props.status
    };
  }
  render() {
    //aproch 1
    // if(this.state.isLoggedIn)
    // {
    //   return(<h1>Logged In</h1>)
    // }
    // else
    // {
    //   return (<h1>Logged In</h1>)
    // }

    // element method approch 2
    // let message;
    // if(this.state.isLoggedIn)
    // message=<h1>Logged In</h1>
    // else
    // message=<h1>Logged In</h1>
    // return message;
    //approch 3 conditional approch
    // return this.state.isLoggedIn ?<h1>Logged In</h1> : <h1>not Logged In</h1>
    //approch 4 short circuit approch, it either shows message or not
    return this.state.isLoggedIn && <h1>Logged In</h1>;
  }
}
export default ConditionalRender;
