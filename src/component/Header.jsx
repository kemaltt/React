import React, { Component } from "react";
import styles from "./Header.module.css";
import { HeaderContainer, List } from "../Styles";

export default class Header extends Component {
  render() {
    // console.log(this.props);
    return (
      <HeaderContainer>
        {/* <h1 style={{ backgroundColor: "orange", color: "white" }}>
          {this.props.headerTitle}
        </h1>
        <button
          className={styles.btn}
          //   style={{
          //     backgroundColor: "green",
          //     color: "white",
          //     borderRadius: "25px",
        >
          Submit
        </button> */}

        <List header>
          {this.props.content.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </List>
      </HeaderContainer>
    );
  }
}
