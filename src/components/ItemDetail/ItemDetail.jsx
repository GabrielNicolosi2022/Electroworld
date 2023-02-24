import './ItemDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ItemDetail({ detail }) {
  const navigate = useNavigate();
  const [counter, setCount] = useState(0);

  const addCart = (event) => {
    event.preventDefault();
    console.log({ ...detail, quantity: counter });
  };
  return (
    <>
      <div className="itemDetail">
        <img
          className="detail"
          alt={detail.name}
          src={detail.image}
          width="200px"
        />
        <h2 className="detail">{detail.name}</h2>
        <h3 className="detail">{detail.description}</h3>
        <h3 className="detail">{detail.quality}</h3>
        <h3 className="detail">{detail.category}</h3>
        <h3 className="detail">{detail.price}</h3>
        <ItemCount count={counter} setCount={setCount} />
        <button onClick={() => navigate('/')} className="common-btn">
          Seguir comprando
        </button>
        <button onClick={addCart} className="cart-btn">
          Agregar al carrito
        </button>
        <button onClick={() => navigate('/cart')} className="common-btn">
          Completar mi compra
        </button>
      </div>
    </>
  );
}
export default ItemDetail;
