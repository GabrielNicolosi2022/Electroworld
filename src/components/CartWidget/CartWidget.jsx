// creo componente CartWidget con un ícono y una notificación mostrando un número hardcodeado que indica la cantidad de elementos en el carrito.
// ubicar el componente CartWidget dentro del componente NavBar.
import cart from "../images/carrito.svg";
import "./CartWidget.css";
export default function CartWidget() {
  return (
    <div className="div-cart">
      <img src={cart} className="cart" alt="carrito"/>
        <span>3</span>
    </div>
  );
}
