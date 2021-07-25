import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Category from "./components/Category";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroobackendbyejego.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      alert("An error occurred");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addButton = (mealId) => {
    const exist = basket.find((itemId) => itemId === mealId);
    if (exist) {
      const index = basket.indexOf(exist);
      const newBasket = [...basket];
      newBasket[index].amount++;
      setBasket(newBasket);
    }
  };

  const removeButton = (mealId) => {
    const exist = basket.find((itemId) => itemId === mealId);
    if (exist) {
      const index = basket.indexOf(exist);
      const newBasket = [...basket];

      newBasket[index].amount--;
      const filteredBasket = basket.filter((item) => item.amount > 0);
      setBasket(filteredBasket);
    } else {
      setBasket(basket);
    }
  };

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="main">
      <div className="headerpresentation">
        <Header />
        <Presentation
          name={data.restaurant.name}
          description={data.restaurant.description}
          image={data.restaurant.picture}
        />
      </div>
      <div className="partwithbasket">
        <div className="mealblocks">
          {data.categories
            .filter((category) => category.meals.length > 0)
            .map((category, index) => {
              return (
                <Category
                  category={category}
                  key={index}
                  basket={basket}
                  setBasket={setBasket}
                />
              );
            })}
        </div>
        <div className="thisbasket">
          <Basket
            basket={basket}
            category={data.category}
            removeButton={removeButton}
            addButton={addButton}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
