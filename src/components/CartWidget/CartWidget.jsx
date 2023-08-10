const Carwidget = () => {
  return (
    <div>
      <button className="btn btn-primary position-relative">
        <i class="bi bi-cart4"></i>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          4
          <span class="visually-hidden">Productos en el Carrito</span>
        </span>
      </button>
    </div>
  )
};

export default Carwidget;