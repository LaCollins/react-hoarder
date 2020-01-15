import React from 'react';
import './Stuff.scss';
import { Link } from 'react-router-dom';
import itemShape from '../../../helpers/propz/itemShape';

class Stuff extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
  }

  render() {
    const { item } = this.props;

    return (
      <div className="Stuff col-4 mb-4">
        <div className="card h-100">
          <div className="card-body">
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
