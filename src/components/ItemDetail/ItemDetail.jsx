import './ItemDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { isDisabled } from '@testing-library/user-event/dist/utils';
function ItemDetail({ detail }) {
  const navigate = useNavigate();

  const { addItem } = useContext(CartContext);

  const [counter, setCount] = useState(1);
  // console.log(detail.stock)

  return (
    <>
      <div className='itemDetail'>
        <img
          className='detail'
          alt={detail.name}
          src={`/img/${detail.image}`}
          width='200px'
        />
        <h2 className='detail'>{detail.name}</h2>
        <h3 className='detail'>{detail.description}</h3>
        <h3 className='detail'>{detail.quality}</h3>
        <h3 className='detail'>{detail.category}</h3>
        <h3 className='detail'>{`U$S ${detail.price}`}</h3>
        <h6 className='detail'>Disponibles: {detail.stock}</h6>
        <ItemCount count={counter} setCount={setCount} />
        <button onClick={() => navigate('/')} className='common-btn'>
          Seguir comprando
        </button>
        <button onClick={() => addItem(detail, counter)} className='cart-btn'>
          Agregar al carrito
        </button>
        <button onClick={() => navigate('/cart')} className='common-btn'>
          Completar mi compra
        </button>
      </div>
    </>
  );
}
export default ItemDetail;
