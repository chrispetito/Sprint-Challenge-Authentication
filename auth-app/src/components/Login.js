import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className='form-container'>
        <h1>Log In</h1>
        <form className='form' onSubmit={this.login}>
          <input
            required
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <input
            required
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }

  handleChanges = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    const endpoint = `http://localhost:3300/api/login`;
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.error(err);
      });
  };
}
