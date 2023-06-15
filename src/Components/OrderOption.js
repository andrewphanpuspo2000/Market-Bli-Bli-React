import { Options } from "./Options";

export const OrderOption = () => {
  const options = [
    {
      style: "options-to-order flex shadow rounded",
      icon: "fa-solid fa-truck fa-4x",
      message: "Deliver your items to your home",
      button: "Deliver",
    },
    {
      style: "options-to-order flex shadow rounded",
      icon: "fa-solid fa-store fa-4x",
      message: "Pick up your order in store",
      button: "Pick up",
    },
  ];
  return (
    <section className="order-option-section">
      <h2>Order Options</h2>
      <div className="order-option flex">
        {options.map((item, i) => (
          <Options
            key={i}
            style={item.style}
            icon={item.icon}
            message={item.message}
            button={item.button}
          />
        ))}
      </div>
    </section>
  );
};
