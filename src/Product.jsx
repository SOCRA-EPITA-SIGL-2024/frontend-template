import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Deals from "./Deals";
import ProductMenu from "./ProductMenu";

function Product() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/product/vegetable");
  }, []);
  return (
    <>
      <Deals />
      <h1>Produits</h1>
      <div className="products">
        <ProductMenu />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Product;
