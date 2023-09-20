import { Link, NavLink } from "react-router-dom";
import Cartwidget from "../CartWidget/CartWidget";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles['navbar-custom']}`}>
      <div className="container-fluid">
        <h1 className={styles.logo}>
          <Link to="/" className="navbar-brand">
          <img src="/img/favicon-16x16.png" alt="Dlevante" />
          Dlevante
          </Link>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/category/Remerasoficiales" className="nav-link">
                Remeras Oficiales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Rodilleras" className="nav-link">
                Rodilleras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Shorts" className="nav-link">
                Shorts
              </NavLink>
            </li>
          </ul>
        </div>
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;