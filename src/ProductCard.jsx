import React from "react";
import useAppContext from "./AppContext";

function ProductCard({ imageSrc, title, price, discount }) {
  const {
    state: { basket },
    dispatch,
  } = useAppContext();
  const [alreadyAdded, setAlreadyAdded] = React.useState(
    !!basket.find((item) => item.title === title)
  );
  return (
    <div className="card">
      <div className="card-header">
        <img src={imageSrc} alt={title} />
      </div>

      <div className="card-content">
        <h4>{title}</h4>
      </div>
      <div className="card-footer">
        <span>
          <i>
            <s>{price}</s>
            <span className="discount"> {price - discount}</span> (- {discount})
            € / kg
          </i>
        </span>
      </div>
      <div className="card-actions">
        <button
          disabled={alreadyAdded}
          onClick={() => {
            dispatch({
              type: "NEW_BASKET_ITEM",
              item: { title, price: price - discount },
            });
            setAlreadyAdded(true);
          }}
        >
          <i className="fa fa-shopping-cart"></i>{" "}
          {alreadyAdded ? "Déjà ajouté au panier" : "Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
