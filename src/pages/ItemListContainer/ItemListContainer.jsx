import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  // console.log(categoryId);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'products');

    getDocs(querySnapshot)
      .then((response) => {
        // console.log(response.docs);
        const list = response.docs.map((doc) => {
          // console.log(doc);
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(list);
        setProductList(list);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProducts();
  }, [categoryId]);

  // Loading mientras cargar base de datos
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className='ItemListContainer'>
          <ItemList productsList={productList} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
