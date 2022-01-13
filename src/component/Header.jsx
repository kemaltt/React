import React, { Component } from "react";
import styles from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "orange", color: "white" }}>
          {this.props.title}
        </h1>
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
