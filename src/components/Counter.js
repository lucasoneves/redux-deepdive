import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

import { counterActions } from "../store/index.js";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncreaseByFive = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounter = () => {
    dispatch(counterActions.toggleCounter());
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
