import "bootstrap/js/dist/dropdown";

export const Header = () => {
  return (
    <div class="headers flex">
      <div class="logo">
        <h2>BLIBLI</h2>
      </div>
      <div class="nav-link-option">
        <ul class="flex">
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              products
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item textColor" href="./product.html">
                  Drinks
                </a>
              </li>
              <li>
                <a class="dropdown-item textColor" href="#">
                  Snacks
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./about.html">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
