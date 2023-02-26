import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../logo-electro-world-bt.png';

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="container">
          <nav className="row">
            {/* Logo */}
            <Link
              to={'/'}
              className="col-12 col-md-3 d-flex align-items-center justify-content-center"
            >
              <img src={logo} alt="logo" width="100" />
            </Link>
            {/* Location */}
            <div className="col">
              <h4 className="">Electro World</h4>
              <ul className="list-unstyled">
                <li>+54 011-3046-2293</li>
                <li>Buenos Aires, Argentina</li>
                <li>Bolivar 6550 - Villa Ballester</li>
              </ul>
            </div>
            {/* Site Map */}
            <div className="col">
              <h4 className="">Mapa del Sitio</h4>
              <ul className="list-unstyled">
                <Link to={'/'}>
                  <li className="footer-links">Inicio</li>
                </Link>
                <Link to={'/category/tv'}>
                  <li className="footer-links">TV</li>
                </Link>
                <Link to={'/category/informatica'}>
                  <li className="footer-links">Informatica</li>
                </Link>
                <Link to={'/category/electro'}>
                  <li className="footer-links">Electro</li>
                </Link>
              </ul>
            </div>
            {/* Social Net */}
            <div className="col">
              <h4 className="fw-bold mb-2 text-center">Seguinos</h4>
              <ul className="list-unstyled">
                <li className="d-flex py-2 justify-content-around">
                  <i className="bi bi-facebook" />
                  <i className="bi bi-instagram" />
                  <i className="bi bi-twitter" />
                  <i className="bi bi-youtube" />
                </li>
              </ul>
            </div>
            <div className="row">
              <hr />
              <p className="col-12 text-center">
                &copy;{new Date().getFullYear()} Electroworld S.A. | Todos los
                derechos reservados | Términos de Servicio | Privacidad
              </p>
              <p className="col-12 text-center">
                ***Sitio realizado por Gabriel Nicolosi para CoderHause***
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
