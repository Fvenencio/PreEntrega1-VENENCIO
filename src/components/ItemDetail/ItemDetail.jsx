import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>Producto NO encontrado</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.category}</p>
      <img src={item.image} alt={item.name} />
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;