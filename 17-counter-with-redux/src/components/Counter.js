import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  /**
   * The handleIncrement function dispatches an action of type "INCREMENT".
   */
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  /**
   * The handleDecrement function dispatches an action of type "DECREMENT".
   */
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
