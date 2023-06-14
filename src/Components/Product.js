export const Product = ({ image, name, price }) => {
  return (
    <div class="productHot flex shadow">
      <div class="hotImage">
        <img src={image} alt="" />
      </div>
      <div class="desc flex">
        <p class="font-weight">{name}</p>
        <span class="hot-price">
          <i class="fa-solid fa-dollar-sign"></i> {price}
        </span>
      </div>
      <div class="buy-button">
        <button class="btn btn-success">Buy</button>
      </div>
    </div>
  );
};
