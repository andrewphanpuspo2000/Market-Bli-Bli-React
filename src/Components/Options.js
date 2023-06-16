export const Options = ({ style, icon, message, button }) => {
  return (
    <div className={style}>
      <div className="icon-delivery">
        <i className={icon}></i>
      </div>
      <p className="font-weight">{message}</p>
      <button className="btn btn-success">{button}</button>
    </div>
  );
};
