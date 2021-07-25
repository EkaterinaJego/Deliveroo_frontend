import Meal from "./Meal";

const Meals = ({ category, basket, setBasket, addItem }) => {
  return category.meals ? (
    category.meals.map((meal, id) => {
      return (
        <Meal
          addItem={addItem}
          meal={meal}
          id={id}
          basket={basket}
          setBasket={setBasket}
        />
      );
    })
  ) : (
    <></>
  );
};

export default Meals;
