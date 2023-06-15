export const Product = ({ image, name, price }) => {
  return (
    <div className="productHot flex shadow">
      <div className="hotImage">
        <img src={image} alt="" />
      </div>
      <div className="desc flex">
        <p className="font-weight">{name}</p>
        <span className="hot-price">
          <i className="fa-solid fa-dollar-sign"></i> {price}
        </span>
      </div>
      <div className="buy-button">
        <button className="btn btn-success">Buy</button>
      </div>
    </div>
  );
};
