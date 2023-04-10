import CardTemplate from "./CardTemplate";
import ProductCard from "./ProductCard";

function Deals() {
  return (
    <>
      <h1>Promotions</h1>
      <div className="deals">
        <ProductCard
          title="Carotte"
          price={3.37}
          discount={0.45}
          imageSrc={
            "https://github.com/marcusklasson/GroceryStoreDataset/raw/master/dataset/iconic-images-and-descriptions/Vegetables/Carrots/Carrots_Iconic.jpg"
          }
        />
        <CardTemplate short />
        <CardTemplate short />
      </div>
    </>
  );
}

export default Deals;
