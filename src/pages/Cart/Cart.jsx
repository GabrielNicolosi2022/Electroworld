import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  // console.log(Cart);
  return (
    <div className="pageCart">
      {cart.map((product) => (
        <div className="itemCart" key={product.name}>
          <div className="item">
            <img src={product.image} alt="imagen del producto" width="100px" />
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            <h4>{product.quality}</h4>
            <h4>{product.price}</h4>
            <h5>Cant: {product.quantity} </h5>
            <button onClick={() => removeItem(product.id)}>
              <img
                className="delete-btn"
                src="/icons/delete-icon.svg"
                alt="delete icon"
              />
            </button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <button className="common-btn" onClick={clear}>
          Vaciar carrito
        </button>
      )}
    </div>
  );
};
export default Cart;
