import React, { Component } from "react";

const styleFooter = {
  backgroundColor: "green",
  color: "white",
  borderRadius: "25px",
};

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "gray",
          color: "white",
          borderRadius: "10px",
          textAlign: "center",
          margin: "4px",
        }}
      >
        Contact us: 01769827776...<p>&copy;Copyright 2022</p>
        <button style={styleFooter}>Submit</button>
      </div>
    );
  }
}
