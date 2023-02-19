import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
const ItemDetailContainer = ({ prodSel }) => {
    
  const [item, setItem] = useState(prodSel);
console.log(item);
  const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(item);
    }, 2000);
  });
  useEffect(() => {
    getItem
      .then((response) => {
        // console.log(response);
        setItem(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [prodSel]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
