import { Button, Col } from "react-bootstrap";

export const DrinkItem = ({ itemName, image, price, cart, buy }) => {
  return (
    <Col md={3} className="mt-4">
      <div className="drink shadow flex">
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
          <Button className="btn btn-success">{cart}</Button>
          <Button className="btn btn-success">{buy}</Button>
        </div>
      </div>
    </Col>
  );
};
