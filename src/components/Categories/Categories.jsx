// creo lista de categorias para el NavBar
import './Categories.css';
export default function Categories() {
  return (
    <ul className="categorias">
      <li className="categorias__items">
        <a href="#">Destacados</a>
      </li>
      <li className="categorias__items">
        <a href="#">TV</a>
      </li>
      <li className="categorias__items">
        <a href="#">Informatica</a>
      </li>
      <li className="categorias__items">
        <a href="#">Electro</a>
      </li>
    </ul>
  );
}
