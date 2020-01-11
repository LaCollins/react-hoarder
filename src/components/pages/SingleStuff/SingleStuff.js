import React from 'react';

import './SingleStuff.scss';

class SingleStuff extends React.Component {
  render() {
    const { edit } = this.props.match.params;

    return (
      <div className="SingleStuff">
        { edit === 'edit' ? (<h1>Edit</h1>) : (<h1>Single Stuff</h1>) }
      </div>
    );
  }
}

export default SingleStuff;
