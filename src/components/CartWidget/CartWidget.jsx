import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  // console.log(cart);
  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0));
  }, [cart]);

  return (
    <Link to={'/cart'}>
      <div className="div-cart">
        <img src="/carrito.svg" className="cart" alt="Carrito" />
        <span>{total}</span>
      </div>
    </Link>
  );
}
