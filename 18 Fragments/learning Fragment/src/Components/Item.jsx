import styles from "./Items.module.css"
const Items = ({foodItem}) => {
  console.log(styles)
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
    </li>
  );
};
export default Items;
