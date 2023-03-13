import './ItemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
const ItemList = ({ productsList }) => {
  // console.log(productsList);
  return (
    <div className="itemList">
      {productsList.map((producto) => (
        <div key={producto.id}>
          <Link to={`/item/${producto.id}`}>
            <Item product={producto} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
