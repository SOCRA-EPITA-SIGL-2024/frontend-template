import NavItem from "./NavItem";

function ProductMenu() {
  return (
    <nav className="menu-vertical">
      <ul>
        <li>
          <NavItem to="/product/vegetable">Fruits & Légumes</NavItem>
        </li>
        <li>
          <NavItem to="/product/chicken">Volailles</NavItem>
        </li>
        <li>
          <NavItem to="/product/red-meat">Viande rouge</NavItem>
        </li>
        <li>
          <NavItem to="/product/drink">Boissons</NavItem>
        </li>
        <li>
          <NavItem to="/product/wine">Vin et spiritueux</NavItem>
        </li>
      </ul>
    </nav>
  );
}

export default ProductMenu;
