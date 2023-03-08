import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
} from 'firebase/firestore';

const Cart = () => {
  const { cart, clear, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  const db = getFirestore();

  if (cart.length !== 0) {
    const createOrder = (event) => {
      event.preventDefault();
      const querySnapshot = collection(db, 'orders');

      addDoc(querySnapshot, {
        buyer: {
          email: 'test2@test.com',
          name: 'Tomas',
          phone: '+54154433221',
        },
        products: cart.map((product) => {
          return {
            title: product.name,
            price: product.price,
            id: product.id,
            quantity: product.quantity,
          };
        }),
        total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
      })
        .then((response) => {
          console.log(response.id);
          alert(`Orden con el id: ${response.id} ha sido creada`);
          updateStocks();
        })
        .catch((error) => console.log(error));
    };

    const updateStocks = () => {
      cart.forEach((product) => {
        const querySnapshot = doc(db, 'products', product.id);
        updateDoc(querySnapshot, { stock: product.stock - product.quantity })
          .then(() => {
            // alert('El stock de los productos ha sido actualizado.');
            updateStocks();
          })
          .then(() => {
            alert('El stock de los productos ha sido actualizado');
          })
          .catch((error) => console.log(error));
      });
    };
    return (
      <div className='pageCart'>
        {cart.map((product) => (
          <div className='Cart' key={product.name}>
            <div className='itemCart'>
              <img
                src={`/img/${product.image}`}
                alt='imagen del producto'
                width='100px'
              />
              <h4>
                {product.name} {product.description} {product.quality}
              </h4>
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
        <div className='buttons'>
          {cart.length > 0 && (
          <button className='common-btn' onClick={clear}>
            Vaciar carrito
          </button>
        )}
        <button onClick={() => navigate('/')} className='common-btn'>
          Seguir comprando
        </button>
        <button className='common-btn' onClick={createOrder}>
          Completar compra
        </button>
        </div>
        
      </div>
    );
  } else {
    return (
      <div className='pageCartEmpty'>
        <p>Aún no tienes productos en tu carrito...</p>
        <button onClick={() => navigate('/')} className='common-btn'>
          Elegir productos
        </button>
      </div>
    );
  }
};
export default Cart;
