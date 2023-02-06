// creo componente CartWidget con un ícono y una notificación mostrando un número hardcodeado que indica la cantidad de elementos en el carrito.
// ubicar el componente CartWidget dentro del componente NavBar.
import cart from "../../components/Assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg";
import "./CartWidget.css";
export default function CartWidget() {
  return (
    <div className="div-cart">
      <img
        src={cart}
        className="cart"
        alt="carrito"
      />
      <span>3</span>
    </div>
  );
}
