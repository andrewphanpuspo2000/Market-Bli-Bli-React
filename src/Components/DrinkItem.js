export const DrinkItem = ({ itemName, image, price, cart, buy }) => {
  return (
    <div className="col-md-3 height-full mt-4">
      <div className="drink height-full shadow flex">
        <div className="drink-image">
          <img src={image} alt="" />
        </div>
        <div className="drink-desc flex">
          <span className="font-weight">{itemName} </span>
          <span className="font-weight">
            <i className="fa-solid fa-dollar-sign"></i>
            {price}
          </span>
        </div>
        <div className="option-to-buy flex">
          <button className="btn btn-success">{cart}</button>
          <button className="btn btn-success">{buy}</button>
        </div>
      </div>
    </div>
  );
};
