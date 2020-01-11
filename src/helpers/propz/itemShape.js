import PropTypes from 'prop-types';

const itemShape = PropTypes.shape({
  id: PropTypes.string,
  itemName: PropTypes.string,
  itemImage: PropTypes.string,
  itemDescription: PropTypes.string,
  uid: PropTypes.string,
});

export default { itemShape };
