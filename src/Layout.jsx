import React from "react";
import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
import Product from "./Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import NavItem from "./NavItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Oups, something wrong happened</h1>,
    children: [
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: "/product/vegetable",
            element: <h1>Fruits et légumes</h1>,
          },
          {
            path: "/product/chicken",
            element: <h1>Volailles</h1>,
          },
          {
            path: "/product/red-meat",
            element: <h1>Viande rouge</h1>,
          },
          {
            path: "/product/drink",
            element: <h1>Boissons</h1>,
          },
          {
            path: "/product/wine",
            element: <h1>Vin & spiritueux</h1>,
          },
        ],
      },
      {
        path: "/command",
        element: <h1>Commands</h1>,
      },
      {
        path: "/basket",
        element: <h1>Basket</h1>,
      },
    ],
  },
]);

function Layout() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/product");
  }, []);
  return (
    <div className="App">
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
      <div className="banner">
        <span></span>
        <h1 className="banner-head">
          Des produits frais
          <br />
          <u>
            <b>de votre voisinage</b>
          </u>
        </h1>
        <span></span>
      </div>
      <Outlet />
    </div>
  );
}
