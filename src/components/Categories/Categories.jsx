// creo lista de categorias para el NavBar
import "./Categories.css"
export default function Categories() {
  return (
    <ul className="categorias">
      <li className="categorias__items"><a href="#">Nosotros</a></li>
      <li className="categorias__items"><a href="#">Nuestros Trabajos</a></li>
      <li className="categorias__items"><a href="#">Contactanos</a></li>
    </ul>
  );
}
