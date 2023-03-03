import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [detailObject, setDetailObject] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, 'products', id);

    getDoc(querySnapshot)
      .then((res) => {
        setDetailObject({
          // console.log(res.data());
          // console.log(res.id);
          id: res.id,
          ...res.data(),
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div
          style={{
            paddingBottom: '3em',
          }}
        >
          <ItemDetail detail={detailObject} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
