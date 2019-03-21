import React from "react";
import { connect } from "react-redux";

class Data extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Counter: {this.props.counter}</p>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    name: store.name,
    counter: store.counter
  };
};

export default connect(
  mapStateToProps,
  null
)(Data);
