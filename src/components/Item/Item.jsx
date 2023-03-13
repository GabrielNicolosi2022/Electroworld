import './Item.css';
const Item = ({ product }) => {
  // console.log(product);
  return (
    <div className='item'>
      <img alt={product.name} src={`/img/${product.image}`} width='100px' />
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <h3>{`$ ${new Intl.NumberFormat().format(product.price)}`}</h3>
    </div>
  );
};

export default Item;
// new Intl.NumberFormat().format(product.price);