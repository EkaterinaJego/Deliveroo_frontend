import "./basket.css";
import { deliveryFees } from "./helpers";
import { formatPrice } from "./helpers";

const Basket = ({ basket, addButton, removeButton }) => {
  let subTotal = 0;

  basket.forEach((basketItem) => {
    subTotal += basketItem.price * basketItem.amount;
  });

  let total = deliveryFees + subTotal;

  return (
    <div>
      {basket.length === 0 ? (
        <div className="emptyBasket">
          <div>
            <h2> Validez votre panier</h2>
          </div>
          <div>Votre panier est vide</div>
        </div>
      ) : (
        <div className="filledBasket">
          <div>
            <h2> Validez votre panier</h2>
          </div>
          {basket.map((item, index) => {
            return (
              <div className="basketCalcul">
                <div style={{ display: "flex" }}>
                  <button
                    className="basketbutton"
                    onClick={() => addButton(item)}
                  >
                    +
                  </button>
                  <div className="amount"> {item.amount}</div>
                  <button
                    className="basketbutton"
                    onClick={() => removeButton(item)}
                  >
                    -
                  </button>
                  <div
                    className="title"
                    style={{ marginLeft: "10px", width: "150px" }}
                  >
                    {item.title}
                  </div>{" "}
                </div>
                <div className="price">{formatPrice(item.price)}</div>
              </div>
            );
          })}

          <div className="subtotal">
            <span>Sous-total :</span>
            <span>{formatPrice(subTotal)}</span>
          </div>
          <div className="deliveryfees">
            <span>Frais de livraison :</span>
            <span>{formatPrice(deliveryFees)}</span>
          </div>
          <div className="total">
            <span>Total :</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
