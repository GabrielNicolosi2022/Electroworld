import './ItemCount.css';

const ItemCount = ({ count, setCount, stock }) => {
  const onAdd = () => {
    setCount(count + 1);
  };

  const substract = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className='contador'>
        <button
          className='contador-btn'
          disabled={count === 0}
          onClick={substract}
        >
          -
        </button>
        <h2 className='contador-number'>{count}</h2>
        <button
          className='contador-btn'
          disabled={count === stock}
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
