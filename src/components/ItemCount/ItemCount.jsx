import './ItemCount.css';
// let stock = 7;
const ItemCount = ({ count, setCount }) => {
  const onAdd = () => {setCount(count + 1)
    // if (count < stock) {
    //   ;
    // }
  };
  const substract = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  // // Función para evitar que se cargen al carrito mayor cantidad que en stock
  // const excedsStock = (detail) => {
  //   if (count > detail.stock) {
  //     isDisabled(ItemCount);
  //   }
  // };

  return (
    <div>
      <div className='contador'>
        <button className='contador-btn' onClick={substract}>
          -
        </button>
        <h2 className='contador-number'>{count}</h2>
        <button className='contador-btn' onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
