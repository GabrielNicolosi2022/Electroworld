import './ItemDetail.css';
function ItemDetail({ item }) {
  // console.log(item);
  return (
    <>
      <div className="itemDetail">
        <img className='detail' alt={item.name} src={item.image} width="100px" />
        <h2 className='detail'>{item.name}</h2>
        <h3 className='detail'>{item.description}</h3>
        <h3 className='detail'>{item.quality}</h3>
        <h3 className='detail'>{item.category}</h3>
        <h3 className='detail'>{item.price}</h3>
      </div>
    </>
  );
}
export default ItemDetail;
