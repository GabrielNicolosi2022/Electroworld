import './ItemDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

function ItemDetail({ detail }) {
  const navigate = useNavigate();

  const { addItem } = useContext(CartContext);

  const [counter, setCounter] = useState(0);
  // console.log(detail.stock)
  useEffect(() => {
    setCounter(detail?.stock === 0 ? 0 : 1);
  }, [detail]);

  // Si no se encuentra el producto en Stock enviar alerta al usuario, de lo contrario permitir visualización del producto
  if (detail.stock !== 0) {
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
          <h3 className='detail'>{`$ ${new Intl.NumberFormat().format(
            detail.price
          )}`}</h3>
          <h6 className='detail'>Disponibles: {detail.stock}</h6>
          <ItemCount
            count={counter}
            setCount={setCounter}
            stock={detail.stock}
          />
          <button onClick={() => navigate('/')} className='common-btn'>
            Seguir comprando
          </button>
          <button
            disabled={counter > detail.stock ? true : false}
            onClick={() => addItem(detail, counter)}
            className='cart-btn'
          >
            Agregar al carrito
          </button>
          <button onClick={() => navigate('/cart')} className='common-btn'>
            Ir al carrito
          </button>
        </div>
      </>
    );
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'El producto seleccionado se encuentra momentaneamente sin stock',
      confirmButtonText: 'Seguir comprando',
    }).then(() => {
      navigate('/');
    });
  }
}
export default ItemDetail;
