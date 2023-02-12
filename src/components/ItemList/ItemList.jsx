import "./style.css"
import Item from "../Item/Item";
const ItemList = ({ productsList }) => {
  console.log(productsList);
  return (
    <div className="itemList">
      {productsList.map((product) => (
        <div key={product.id}>
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
