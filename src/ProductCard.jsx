function ProductCard({ imageSrc, title, price, discount }) {
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
        <button>
          <i className="fa fa-shopping-cart"></i> Ajouter au panier
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
