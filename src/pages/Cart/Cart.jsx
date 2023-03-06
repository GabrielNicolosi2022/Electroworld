import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md'


const Cart = () => {
  const navigate = useNavigate();

  const { cart, clear, removeItem } = useContext(CartContext);

  if (cart.length !== 0) {
        return (
          <div className='pageCart'>
            {cart.map((product) => (
              <div className='itemCart' key={product.name}>
                <div className='item'>
                  <img
                    src={`/img/${product.image}`}
                    alt='imagen del producto'
                    width='100px'
                  />
                  <h3>{product.name}</h3>
                  <h4>{product.description}</h4>
                  <h4>{product.quality}</h4>
                  <h4>{`U$S ${product.price}`}</h4>
                  <h5>Cant: {product.quantity} </h5>
                  <button
                    className='delete-btn'
                    onClick={() => removeItem(product.id)}
                  >
                    <MdDeleteForever
                      className='delete-icon'
                      size='2em'
                      // color='#a69bef'
                    />
                  </button>
                </div>
              </div>
            ))}
            {cart.length > 0 && (
              <button className='common-btn' onClick={clear}>
                Vaciar carrito
              </button>
            )}
          </div>
        );
  } else {
    return (
      <div className='pageCartEmpty'>
        <p>Aún no tienes productos en tu carrito...</p>
        <button onClick={() => navigate('/')} className='common-btn'>
          Ver productos
        </button>
      </div>
    );
  }
};
export default Cart;
