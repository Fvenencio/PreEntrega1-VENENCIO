import PropTypes from "prop-types";
import { Link,} from "react-router-dom";

const ItemDetail = ({ item, isLoading, addItem, removeItem }) => {


  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageId} alt={item.title} />
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Categoría: {item.categoryId}</p>
      <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
      <Link to="/" className="navbar-brand">
          VOLVER
          </Link>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
  removeItem: PropTypes.func, 
};

export default ItemDetail;
