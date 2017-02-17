import React from "react";
import { connect } from "react-redux";
import { Component } from "react";

const mapStateToProps = state => {
  var props = {};
  return props;
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
