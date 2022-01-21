import React, { Component } from "react";

export default class Collapse extends Component {
  state = {
    showContent: false,
  };

  render() {
    // console.log(this.props);

    return (
      <div>
        <button
          onClick={() =>
            this.setState({ showContent: !this.state.showContent })
          }
          class="btn btn-primary w-100"
        >
          {/* {console.log(this.props.children.props.cardTitle)} */}
          {/* {this.props.children.props.cardTitle} */}

          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
        </button>

        {this.state.showContent ? (
          <div className="collapse show">
            {/* {this.props.children} */}

            {React.Children.map(this.props.children, (children) => children)}
          </div>
        ) : null}
      </div>
    );
  }
}
