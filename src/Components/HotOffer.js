import smith from "../assets/smith.jpg";
import ferrero from "../assets/ferero.jpg";
import Avocado from "../assets/avocado.jpg";
import hagendaz from "../assets/hagendaz.jpg";
import { Product } from "./Product";
export const HotOffer = () => {
  const hotOffer = [
    {
      image: smith,
      name: "Smith (salt & vinegar)",
      price: 5,
    },
    {
      image: ferrero,
      name: "Ferrero",
      price: 10,
    },
    {
      image: Avocado,
      name: "Avocado",
      price: 3,
    },
    {
      image: hagendaz,
      name: "Hagen-daz",
      price: 7,
    },
  ];
  return (
    <section class="hotoffer">
      <div class="hotOfferContainer">
        <h2>Hot Products</h2>
        <div class="hotContainer flex">
          {hotOffer.map((item, i) => (
            <Product image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </section>
  );
};
