import "bootstrap/js/dist/dropdown";

export const Header = () => {
  return (
    <div className="headers flex">
      <div className="logo">
        <h2>BLIBLI</h2>
      </div>
      <div className="nav-link-option">
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              products
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item textColor" href="/drink">
                  Drinks
                </a>
              </li>
              <li>
                <a className="dropdown-item textColor" href="#">
                  Snacks
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
