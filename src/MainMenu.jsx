import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";
import useAppContext from "./AppContext";

function MainMenu() {
  const {
    state: { basket },
  } = useAppContext();
  const numberOfItemsInBasket = basket.length;
  return (
    <nav className="menu-horizontal">
      <ul>
        <li>
          <NavItem to="/product">Produits</NavItem>
        </li>
        <li>
          <NavItem to="/command">Commandes</NavItem>
        </li>
        <li>
          <NavItem to="/basket" socra="basket-nav-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            {numberOfItemsInBasket > 0 && `(${numberOfItemsInBasket})`}
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
