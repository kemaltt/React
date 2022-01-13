import React, { Component } from "react";
import "./Body.css";
import styles from "./Body.module.css";

export default class Body extends Component {
  render() {
    return (
      <div>
        <p className="student-name">Student name: {this.props.name} </p>
        <p className="student-age">Student age: {this.props.age} </p>
        <p className="course"> Course: {this.props.course} </p>
        <button
          className={styles.btn}
          //   style={{
          //     backgroundColor: "green",
          //     color: "white",
          //     borderRadius: "25px",

          //   }}
          //   onClick={() => this.setState({ teacher: "Afra" })}
        >
          Submit
        </button>
      </div>
    );
  }
}
