import React, { Component } from "react";

export default class Main extends Component {
  render() {
    const { name, age, course } = this.props;
    return (
      <div>
        <h3>User's name is {name}</h3>
        <h3>User's age is {age} </h3>
        <h3>User's applied course is {course} </h3>
      </div>
    );
  }
}
