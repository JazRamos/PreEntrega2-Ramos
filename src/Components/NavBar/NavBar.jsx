import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid justify-content-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#">Home</a>
              <a className="nav-link" href="#">Artículos</a>
              <a className="nav-link" href="#">Contacto</a>
            </div>
          </div>
        </div>
        <div className=" d-flex ">
            <CartWidget />
            <p className="  badge border border-light rounded-circle bg-danger p-1">2</p>
        </div>
      </nav>
    );
  };
  