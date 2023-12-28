function App() {
  let foodItems = ["Daal", "Roti","Ghee", "Green Vegetable", "Salad", "Milk"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          // Use `key` prop to help React identify each list item uniquely
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
