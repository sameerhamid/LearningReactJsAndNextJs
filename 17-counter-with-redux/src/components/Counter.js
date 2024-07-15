import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";
import { counterActions } from "../store";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGLE_COUNTER" });
    // with redux toolkit

    dispatch(counterActions.toggleCounter());
  };

  /**
   * The handleIncrement function dispatches an action of type "INCREMENT".
   */
  const handleIncrement = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  /**
   * The handleDecrement function dispatches an action of type "DECREMENT".
   */
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrementByFive = () => {
    // dispatch({ type: "INCREASEBYVAL", payload: 5 });
    dispatch(counterActions.increaseByVal(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{count}</div>}

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementByFive}>Increment by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }
//   handleDecrement() {
//     this.props.increment();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.count}</div>

//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
