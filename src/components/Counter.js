import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleIncreaseByFive = () => {
    dispatch({ type: "incrementbyfive", amount: 5 });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounter = () => {
    dispatch({ type: "toggle" });
    console.log(showCounter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? <div className={classes.value}>{counter}</div> : ''}
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncreaseByFive}>Increase by 5</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={toggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
