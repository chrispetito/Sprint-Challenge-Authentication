import React from "react";
import axios from "axios";

import requireAuth from "../auth/requireAuth";
import "../auth/axiosIntercept";

class JokeList extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <div>
        {this.state.jokes.map(joke => {
          return (
            <h4 className="ind-joke" key={joke.id}>
              {joke.joke}
            </h4>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const endpoint = `http://localhost:3300/api/jokes`;
    axios
      .get(endpoint)
      .then(res => {
        console.log(res.data);
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default requireAuth(JokeList);
