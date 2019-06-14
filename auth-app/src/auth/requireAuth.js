import React from "react";

const token = localStorage.getItem("jwt");

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = <div className='error-msg'><i className="fas fa-exclamation-circle" />Please log in to view jokes.</div>;
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
