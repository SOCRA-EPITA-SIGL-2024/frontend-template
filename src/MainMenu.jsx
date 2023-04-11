import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

function MainMenu() {
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
          <NavItem to="/basket">
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavItem>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
