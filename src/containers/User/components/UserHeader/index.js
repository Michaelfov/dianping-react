import React, { Component } from "react";
import "./style.css"

class UserHeader extends Component {
  render() {
    const { onBack, onLogout } = this.props;
    return (
      <header className="userHeader">
        <div className="userHeader__back" onClick={onBack}>
          Home
        </div>
        <div className="userHeader__list">
          <span className="userHeader__item userHeader__item--selected">
            Order list
          </span>
          <span className="userHeader__item">Coupon</span>
        </div>
        <div className="userHeader__right" onClick={onLogout}>
          Sign out
        </div>
      </header>
    );
  }
}

export default UserHeader;
