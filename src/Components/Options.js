export const Options = ({ style, icon, message, button }) => {
  return (
    <div class={style}>
      <div class="icon-delivery">
        <i class={icon}></i>
      </div>
      <p class="font-weight">{message}</p>
      <button class="btn btn-success">{button}</button>
    </div>
  );
};
