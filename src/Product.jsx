import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";

function Product() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/product/vegetable");
  }, []);
  return (
    <>
      <h1>Promotions</h1>
      <div className="deals">
        <div className="card">
          <div className="card-header">
            <img
              src="https://github.com/marcusklasson/GroceryStoreDataset/raw/master/dataset/iconic-images-and-descriptions/Vegetables/Carrots/Carrots_Iconic.jpg"
              alt="Carotte"
            />
          </div>

          <div className="card-content">
            <h4>Carotte</h4>
          </div>
          <div className="card-footer">
            <span>
              <i>
                <s>3,37</s>
                <span className="discount"> 2,92</span> (- 0,45) € / kg
              </i>
            </span>
          </div>
          <div className="card-actions">
            <button>
              <i className="fa fa-shopping-cart"></i> Ajouter au panier
            </button>
          </div>
        </div>
        <div className="short-card-template"></div>
        <div className="short-card-template"></div>
      </div>
      <h1>Produits</h1>
      <div className="products">
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
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Product;
