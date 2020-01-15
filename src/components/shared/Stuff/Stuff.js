import React from 'react';
import './Stuff.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import itemShape from '../../../helpers/propz/itemShape';

class Stuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteItem: PropTypes.func,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { deleteItem, item } = this.props;
    deleteItem(item.id);
  }


  render() {
    const { item } = this.props;

    return (
      <div className="Stuff col-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
          <button className="btn btn-danger ml-auto close" onClick={this.deleteItemEvent}>X</button>
            <h5 className="card-title">{item.itemName}</h5>
            <img className="card-img" src={item.itemImage} alt={item.itemName} />
          </div>
          <div className="card-footer">
            <Link className="btn btn-dark m-2" to={`/stuff/${item.id}`}>View</Link>
            <Link className="btn btn-dark m-2" to={`/stuff/${item.id}/edit`}>Edit</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
