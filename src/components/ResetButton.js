import React from "react";
import { connect } from "react-redux";
import { resetCounter } from "./../redux/actions";

class ResetButton extends React.Component {
  render() {
    return <button onClick={() => this.props.resetCounter()}>Reset</button>;
  }
}

export default connect(
  null,
  { resetCounter }
)(ResetButton);
