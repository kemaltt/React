import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };

  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({ term: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="input-container">
        <div className="input-card">
          <form onSubmit={this.handleSubmit} action="">
            <label htmlFor="">Enter a search</label> <br />
            <input
              onChange={this.handleInputChange}
              type="text"
              value={this.state.value}
            />
            <input type="submit" value="Submit" style={{ margin: "10px" }} />
          </form>
        </div>
      </div>
    );
  }
}
