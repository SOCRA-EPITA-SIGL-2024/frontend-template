import useAppContext from "./AppContext";
import "./Basket.css";

function EmptyBasket() {
  return <h4>Your basket is empty</h4>;
}

function Basket() {
  const {
    state: { basket },
  } = useAppContext();

  return (
    <div className="basket">
      <span />
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {basket.length > 0 ? (
            basket.map((item, idx) => (
              <tr key={idx}>
                <td>{item.title}</td>
                <td>{item.price} € / kg</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">
                <EmptyBasket />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <span />
    </div>
  );
}

export default Basket;
