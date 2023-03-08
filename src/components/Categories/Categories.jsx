// creo lista de categorias para el NavBar
import './Categories.css';
import { Link, NavLink } from 'react-router-dom';
export default function Categories() {
  return (
    <ul className="categorias">
      <li className="categorias__items">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/"
        >
          Todos
        </NavLink>
      </li>
      <li className="categorias__items">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/category/tv"
        >
          TV
        </NavLink>
      </li>
      <li className="categorias__items">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/category/informatica"
        >
          Informatica
        </NavLink>
      </li>
      <li className="categorias__items">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          to="/category/electro"
        >
          Electro
        </NavLink>
      </li>
    </ul>
  );
}
