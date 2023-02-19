import './ItemListContainer.css';
import { products } from '../../data/Products';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });
  useEffect(() => {
    getProducts
      .then((response) => {
        console.log(response);
        setProductList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="ItemListContainer">
      <ItemList productsList={productList} />
    </div>
  );
};
export default ItemListContainer;
