import React, { Component } from "react";
import { FooterContainer } from "../Styles";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        Contact us: 01769827776...<p>&copy;Copyright 2022</p>
        {/* <button style={styleFooter}>Submit</button> */}
      </FooterContainer>
    );
  }
}
