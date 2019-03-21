import React from "react";
import { connect } from "react-redux";
import { decCounter } from "./../redux/actions";

class DecrementButton extends React.Component {
  render() {
    return <button onClick={() => this.props.decCounter()}>Decrese</button>;
  }
}

export default connect(
  null,
  { decCounter }
)(DecrementButton);
