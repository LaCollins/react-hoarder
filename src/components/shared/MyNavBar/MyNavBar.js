import React from 'react';
import PropTypes from 'prop-types';
import './MyNavBar.scss';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  render() {
    return (
      <div className="MyNavBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
          <a className="navbar-brand" href="/">Crap-Tracker-2000</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse"
         data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavBar;
