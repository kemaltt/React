import React, { Component } from "react";

export default class Collapse extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <p>
          <a
            class="btn btn-primary"
            data-toggle="collapse"
            href={"#".concat(this.props.href)}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Link with href
          </a>
        </p>
        <div class="collapse" id={this.props.href}>
          <div class="card card-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
