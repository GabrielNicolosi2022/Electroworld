import { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
const ItemDetailContainer = ({ prodSel }) => {
    
  const [item, setItem] = useState(prodSel);
// console.log(prodSel);
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
  }, []);

  return (
    <div className="ItemDetailContainer">
      {/* COMENTANDO TODO SÍ LO RETORNA... POR QUÉ? */}
      <ItemDetail item={prodSel} />
    </div>
  );
};

export default ItemDetailContainer;
