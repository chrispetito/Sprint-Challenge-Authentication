import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import JokeList from "./components/JokeList";
import SignUp from "./components/SignUp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <div className='page-header'>Authentication Sprint Challenge</div>
        <header className="subnav">
          <nav>
            <NavLink className='navlink' to="/login">Login</NavLink>
            <NavLink className='navlink' to="/jokes">Jokes</NavLink>
            <NavLink className='navlink' to="/signup">Sign Up</NavLink>
          </nav>
          <button className='logout-btn' onClick={this.logout}>Log Out</button>
        </header>
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={JokeList} />
        <Route path="/signup" component={SignUp} />
      </div>
    );
  }

  logout = event => {
    event.preventDefault()
    localStorage.removeItem('jwt')
    this.props.history.push('/login')
  }
}

export default withRouter(App);
