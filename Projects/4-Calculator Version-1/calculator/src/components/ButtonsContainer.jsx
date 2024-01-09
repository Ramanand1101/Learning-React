import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonsName.map((buttonName, index) => (
        <button
          key={index} // Added key prop with a unique value for each button
          className={styles.button}
          onClick={()=>onButtonClick(buttonName)}  // Pass the buttonName to the onButtonClick handler
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
