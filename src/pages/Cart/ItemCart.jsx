import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../../components/ItemCount/ItemCount';

const ItemCart = ({ product }) => {
  // console.log(product.stock);
  const { updateItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    updateItem(product.id, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);
  return (
    <>
      <div className='itemCart'>
        <img
          src={`/img/${product.image}`}
          alt='imagen del producto'
          width='100px'
        />
        <h4 className='cartProductName'>
          {product.name} {product.description}
        </h4>
        <h4 className='cartProductPrice'>{`$ ${new Intl.NumberFormat().format(
          product.price
        )}`}</h4>
        <ItemCount
          count={quantity}
          setCount={setQuantity}
          stock={product.stock}
        />
      </div>
    </>
  );
};

export default ItemCart;
