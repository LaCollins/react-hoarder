import React from 'react';
import { Link } from 'react-router-dom';
import itemsData from '../../../helpers/data/itemsData';

import './SingleStuff.scss';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;

    itemsData.getSingleItem(itemId)
      .then((response) => {
        this.setState({ item: response.data });
      })
      .catch((error) => console.error('error from single stuff', error));
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    itemsData.deleteItem(itemId)
      .then(() => this.props.history.push('/stuff'))
      .catch((error) => console.error('error from single stuff', error));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;

    return (
      <div className="SingleStuff container">
        <h1>{item.itemName}</h1>
        <div className="d-flex justify-content-center">
        <Link className="btn btn-dark m-2" to={`/stuff/${itemId}/edit`}>Edit</Link>
        <button className="btn btn-dark m-2" onClick={this.deleteItemEvent}>Delete</button>
        </div>
        <img className="w-50" src={item.itemImage} alt={item.itemName} />
        <h4>{item.itemDescription}</h4>
      </div>
    );
  }
}

export default SingleStuff;
