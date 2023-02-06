// integrar CartWidget
/*  Debe contener:
-Brand (titulo/nombre de la tienda)
-Un listado de al menos tres categorias clickeables 
-Incorporar alguna libreria con estilos(opcional)
*/
// Funcionalidad: Renderizar una barra de menu (NavBar).
import logo from "../../logo-meraki.svg";
import "./NavBar.css";
import Categories from "../Categories/Categories";
import CartWidget from "../CartWidget/CartWidget";
export default function NavBar() {
  return (
    <div className="NavBar">
      <img src={logo} className="logo" alt="logo" />
      <Categories />
      <CartWidget />
    </div>
  );
}
