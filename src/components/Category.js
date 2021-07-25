import Meals from "./Meals";
import "./category.css";

const Category = ({ index, category, basket, setBasket, addItem }) => {
  return (
    <div>
      <h2 className="h2" key={index} style={{ marginLeft: "10px" }}>
        {category.name}
      </h2>
      <div className="mealrow" style={{ width: "100%", marginLeft: "10px" }}>
        <Meals
          category={category}
          basket={basket}
          setBasket={setBasket}
          addItem={addItem}
        />
      </div>
    </div>
  );
};

export default Category;
