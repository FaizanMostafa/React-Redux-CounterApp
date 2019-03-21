import React from "react";
import { connect } from "react-redux";
import { incCounter } from "./../redux/actions";

class IncrementButton extends React.Component {
  render() {
    return <button onClick={() => this.props.incCounter()}>Increase</button>;
  }
}

export default connect(
  null,
  { incCounter }
)(IncrementButton);
