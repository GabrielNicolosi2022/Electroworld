import './ItemCount.css';
let stock = 7;
const ItemCount = ({ count, setCount }) => {
  // const [counter, setItemCount] = useState(0);
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const substract = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="contador">
        <button className="contador-btn" onClick={substract}>
          -
        </button>
        <h2 className="contador-number">{count}</h2>
        <button className="contador-btn" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
