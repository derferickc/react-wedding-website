import React, { Component } from "react";
import Clock from "./Clock";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: "Saturday, September 5, 2020"
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <Clock deadline={this.state.deadline} />
      </React.Fragment>
    );
  }
}
export default Count;