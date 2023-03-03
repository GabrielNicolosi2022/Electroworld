import './style.css';
const Item = ({ product }) => {
  // console.log(product);
  return (
    <div className="item">
      <img alt={product.name} src={`/img/${product.image}`} width="100px" />
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <h3>{`U$S ${product.price}`}</h3>
    </div>
  );
};

export default Item;
