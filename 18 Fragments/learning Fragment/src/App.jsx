import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import FoodItems from "./Components/foodItems";
import ErrorMsg from "./Components/ErrorMsg";


function App() {
  let foodItems = ["sabzi", "Roti","Ghee", "Green Vegetable", "Salad", "Milk"]; 
return (
    <>
    <h1 className="heading">Healthy Food</h1>
    <ErrorMsg items={foodItems}></ErrorMsg>
    <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
