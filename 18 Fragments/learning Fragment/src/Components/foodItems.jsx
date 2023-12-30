// Assuming Item component is imported correctly from "./Item"
import Item from "./Item";

const FoodItems = ({items}) => {
 
  return (
    <ul className="list-group">
      {items.map((item) => (
        // Use `key` prop to help React identify each list item uniquely
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
