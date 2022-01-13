import React, { Component } from "react";

export default class Student extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Student No={this.props.studentNo} <br />
        Scholl={this.props.school}
      </div>
    );
  }
}
