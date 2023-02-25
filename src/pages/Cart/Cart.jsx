import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  // console.log(Cart);
  return (
    <div>
      {cart.map((product) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '500px',
            justifyContent: 'space-between',
          }}
          key={product.name}
        >
          <h2>{product.name}</h2>
          <h3>{product.quantity} </h3>
          {/* mostrar mas datos del producto */}
          <button onClick={() => removeItem(product.id)}>X</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clear}>Vaciar carrito</button>}
    </div>
  );
};

export default Cart;
