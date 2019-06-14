import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom'
import './App.css';

import Login from './components/Login'
import JokeList from './components/JokeList'
import SignUp from './components/SignUp'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/jokes'>Jokes</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </nav>

      </header>
      <Route path='/login' component={Login}></Route>
      <Route path='/jokes' component={JokeList}></Route>
      <Route path='/signup' component={SignUp}></Route>
    </div>
  );
}

export default withRouter(App);
