import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      <h1>Listado de Productos</h1>

      <Link to="/checkout">Ir a finalizar compra</Link>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <h3>{item.title}</h3>
              <img src={item.imageId} alt={item.title} />
              <p>${item.price}</p>
              <p>{item.categoryId}</p>
              <p>Stock: {item.stock}</p>
              <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;