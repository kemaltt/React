import React, { Component } from "react";
import { List, SideBarContainer } from "../Styles";

export default class RightSideBar extends Component {
  render() {
    return (
      <SideBarContainer>
        <List>
          {this.props.content.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </List>
      </SideBarContainer>
    );
  }
}
