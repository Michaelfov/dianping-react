import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./style.css"

class LoginHeader extends Component {
  render() {
    return (
      <div className="loginHeader">
        <Link to='/' className="loginHeader__back"></Link>
        <div className="loginHeader__title">Login in with user name and password</div>
      </div>
    );
  }
}

export default LoginHeader;
