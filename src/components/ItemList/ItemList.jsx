import './style.css';
import Item from '../Item/Item';
import ItemDetailContainer from '../../pages/ItemDetailContainer/ItemDetailContainer';
import { useState } from 'react';
const ItemList = ({ productsList }) => {
  // console.log(productsList);
  const [productoSeleccionado, setProductoSeleccionado] = useState('');
  // console.log(productoSeleccionado);
  return (
    <div>
      <div className="itemList">
        {productsList.map((producto) => (
          <div
            onClick={() => setProductoSeleccionado(producto)}
            key={producto.id}
          >
            <Item product={producto} />
          </div>
        ))}
      </div>
      {productoSeleccionado !== '' && (
        <div>
          <ItemDetailContainer prodSel={productoSeleccionado} />
        </div>
      )}
    </div>
  );
};

export default ItemList;
