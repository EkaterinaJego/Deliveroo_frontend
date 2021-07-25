import "./meal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatPrice } from "./helpers";

const Meal = ({ meal, basket, setBasket }) => {
  const addItem = (itemId) => {
    const itemInBasketIndex = basket.findIndex((item) => item.id === itemId);
    console.log(basket);
    let newBasket = [...basket];
    itemInBasketIndex === -1
      ? (newBasket = [
          ...newBasket,
          {
            amount: 1,
            title: meal.title,
            price: Number(meal.price),
            id: meal.id,
          },
        ])
      : basket[itemInBasketIndex].amount++;
    setBasket(newBasket);
  };

  return (
    <div
      className="mealbox"
      onClick={() => {
        addItem(meal.id);
      }}
    >
      {/* description du repas*/}
      <div className="mealfirstcolumn">
        <div
          className="h3"
          style={{ marginTop: "10px", marginBottom: "10px" }}
          key={meal.id}
        >
          <h3>{meal.title}</h3>
        </div>
        {meal.description ? (
          <div className="mealdescription">{meal.description}</div>
        ) : (
          <div className={{ display: "none" }}></div>
        )}
        <span className="mealprice">
          {formatPrice(meal.price)}
          <span />
          {meal.popular ? (
            <span>
              <FontAwesomeIcon icon="star" className="popular" />
              Populaire
            </span>
          ) : (
            ""
          )}
        </span>
      </div>

      {/* image du repas */}
      <div className="mealsecondcolumn">
        {meal.picture ? (
          <img src={meal.picture} alt={`${meal.title}`} />
        ) : (
          <div className={{ display: "none" }}></div>
        )}
      </div>
    </div>
  );
};

export default Meal;
