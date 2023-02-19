import './ItemDetail.css';
function ItemDetail({ detail }) {
  console.log(detail);
  return (
        <>
      <div className="itemDetail">
        <img
          className="detail"
          alt={detail.name}
          src={detail.image}
          width="100px"
        />
        <h2 className="detail">{detail.name}</h2>
        <h3 className="detail">{detail.description}</h3>
        <h3 className="detail">{detail.quality}</h3>
        <h3 className="detail">{detail.category}</h3>
        <h3 className="detail">{detail.price}</h3>
      </div>
    </>
  );
}
export default ItemDetail;
