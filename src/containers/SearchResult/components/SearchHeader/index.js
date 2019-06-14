import React, { Component } from 'react';
import "./style.css"

class SearchHeader extends Component {
  render() {
    const { onBack, onSearch} = this.props;
    return (
      <header className="searchHeader">
        <div className="searchHeader__back" onClick={onBack}></div>
        <div className="searchHeader__list">
          <span className="searchHeader__item searchHeader__item--selected">Merchant</span>
          <span className="searchHeader__item">Group buying</span>
        </div>
        <div className="searchHeader__icon" onClick={onSearch}></div>
      </header>
    );
  }
}

export default SearchHeader;
