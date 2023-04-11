import React from "react";
import { createBrowserRouter, Outlet, useNavigate } from "react-router-dom";
import Product from "./Product";
import ProductList from "./ProductList";
import Banner from "./Banner";
import MainMenu from "./MainMenu";
import Basket from "./Basket";

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
            element: (
              <ProductList categoryId="vegetable">
                Fruits et légumes
              </ProductList>
            ),
          },
          {
            path: "/product/chicken",
            element: <ProductList categoryId="chicken">Volailles</ProductList>,
          },
          {
            path: "/product/red-meat",
            element: (
              <ProductList categoryId="red-meat">Viande rouge</ProductList>
            ),
          },
          {
            path: "/product/drink",
            element: <ProductList categoryId="drink">Boissons</ProductList>,
          },
          {
            path: "/product/wine",
            element: (
              <ProductList categoryId="wine">Vin & spiritueux</ProductList>
            ),
          },
        ],
      },
      {
        path: "/command",
        element: <h1>Commands</h1>,
      },
      {
        path: "/basket",
        element: <Basket />,
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
      <MainMenu />
      <Banner />
      <Outlet />
    </div>
  );
}
