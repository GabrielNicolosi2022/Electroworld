// creo lista de categorias para el NavBar
import "./Categories.css"
export default function Categories() {
  return (
    <ul className="categorias">
      <li className="categorias__items">
        <a href="#">Electro</a>
      </li>
      <li className="categorias__items">
        <a href="#">Linea Blanca</a>
      </li>
      <li className="categorias__items">
        <a href="#">Informatica</a>
      </li>
      <li className="categorias__items">
        <a href="#">Hogar</a>
      </li>
    </ul>
  );
}
