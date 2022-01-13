import React, { Component } from "react";
import CardFooter from "./CardFooter";

export default class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img
            src={this.props.cardImg}
            className="card-img-top img-fluid w-100"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.cardTitle}</h5>
            <p className="card-text">{this.props.cardText}</p>
          </div>

          <CardFooter />
        </div>
      </>
    );
  }
}
