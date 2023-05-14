import CardTemplate from "./CardTemplate";
import ProductCard from "./ProductCard";

function Deals() {
  return (
    <>
      <h1>Promotions</h1>
      <div className="deals">
        <CardTemplate short />
        <CardTemplate short />
        <CardTemplate short />
      </div>
    </>
  );
}

export default Deals;
