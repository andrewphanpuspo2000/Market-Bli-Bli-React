import { DrinkItem } from "./DrinkItem";
import { Layout } from "./Layout";

export const Drink = () => {
  const drinkItem = [
    {
      itemName: "Sprite",
      image: "https://cdn.ios.net.au/processed/1500x1500/c/COK0300_1.jpg",
      price: 3,
      cart: "Add to cart",
      buy: "Buy",
    },
    {
      itemName: "Sprite",
      image: "https://cdn.ios.net.au/processed/1500x1500/c/COK0300_1.jpg",
      price: 3,
      cart: "Add to cart",
      buy: "Buy",
    },
    {
      itemName: "Sprite",
      image: "https://cdn.ios.net.au/processed/1500x1500/c/COK0300_1.jpg",
      price: 3,
      cart: "Add to cart",
      buy: "Buy",
    },
    {
      itemName: "Sprite",
      image: "https://cdn.ios.net.au/processed/1500x1500/c/COK0300_1.jpg",
      price: 3,
      cart: "Add to cart",
      buy: "Buy",
    },
  ];
  return (
    <Layout>
      <section>
        <div className="drinks-container">
          <h2 className="text-center">Drinks</h2>
          <div className="container text-center height-full">
            <div className="row height-full">
              {drinkItem.map((item, i) => (
                <DrinkItem
                  key={i}
                  itemName={item.itemName}
                  image={item.image}
                  price={item.price}
                  cart={item.cart}
                  buy={item.buy}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
