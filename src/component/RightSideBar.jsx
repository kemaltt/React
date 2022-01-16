import React, { Component } from "react";
import { List } from "../Styles";

export default class RightSideBar extends Component {
  render() {
    return (
      <div>
        <List>
          {this.props.content.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </List>
      </div>
    );
  }
}
