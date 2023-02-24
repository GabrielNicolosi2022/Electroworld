import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="div-cart">
      <img src="./carrito.svg" className="cart" alt="cart image" /><span>{cart?.length}</span>
    </div>
  );
}
