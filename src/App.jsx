import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="menu-horizontal">
        <ul>
          <li>
            <a className="active" aria-current="page" href="#">
              Produits
            </a>
          </li>
          <li>
            <a href="/#">Commandes</a>
          </li>
          <li>
            <a href="/#">
              <i className="fa fa-shopping-cart fa-lg"></i>
            </a>
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
              <a className="active" href="#">
                Fruits & Légumes
              </a>
            </li>
            <li>
              <a href="#">Volailles</a>
            </li>
            <li>
              <a href="#">Viande rouge</a>
            </li>
            <li>
              <a href="#">Boissons</a>
            </li>
            <li>
              <a href="#">Vin et spiritueux</a>
            </li>
          </ul>
        </nav>
        <div>
          <div className="vegetables">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://github.com/marcusklasson/GroceryStoreDataset/raw/master/dataset/iconic-images-and-descriptions/Vegetables/Potato/Solid-Potato/Solid-Potato_Iconic.jpg"
                  alt="Pomme de terre"
                />
              </div>
              <div className="card-content">
                <h2>Pomme de terre</h2>
                <br />
                <p>
                  Cultivés par Lucas B.
                  <br />
                  <br />
                  <b>5.9 km de chez vous</b>
                </p>
              </div>
              <div className="card-footer">
                <span className="price">
                  <i>1,74€ / kg</i>
                </span>
              </div>
              <div className="card-actions">
                <button>
                  <i className="fa fa-shopping-cart"></i> Ajouter au panier
                </button>
              </div>
            </div>
            <div className="card-template"></div>
            <div className="card-template"></div>
            <div className="card-template"></div>
            <div className="card-template"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
