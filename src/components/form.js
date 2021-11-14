import React, { Component } from "react";

class form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      Gender: "Male",
      EmailAddress: "",
    };
  }



  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleGenderChange = (event) => {
    this.setState({
      Gender: event.target.value,
    });
  };

  handleEmailAddressChange = (event) => {
    this.setState({
      EmailAddress: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.username} ${this.state.Gender} ${this.state.EmailAddress}`
    );
    event.preventDefault();
  };

  render() {
    const { username, Gender, EmailAddress } = this.state;
    return (
      <fieldset>
        <legend>
          <p><strong className="field">REACT CHECKPOINT</strong></p>
        </legend>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Gender</label>
            <select value={Gender} onChange={this.handleGenderChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label>Email Address:</label>
            <input
              type="text"
              value={EmailAddress}
              onChange={this.handleEmailAddressChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </fieldset>
    );
  }
}

export default form;
