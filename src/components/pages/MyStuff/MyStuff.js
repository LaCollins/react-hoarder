import React from 'react';
import authData from '../../../helpers/data/authData';
import itemsData from '../../../helpers/data/itemsData';
import Stuff from '../../shared/Stuff/Stuff';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    stuff: [],
  }

  getStuff = () => {
    itemsData.getItemsByUid(authData.getUid())
      .then((stuff) => this.setState({ stuff }))
      .catch((error) => console.error('error from my stuff', error));
  }

  componentDidMount() {
    this.getStuff();
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="stuff container d-flex flex-wrap">
          {this.state.stuff.map((item) => <Stuff key={item.id} item={item} />)}
        </div>
      </div>
    );
  }
}

export default MyStuff;
