import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name, quantity, totalPrice, price, id } = props;

  const removeCartItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };
  const addCartItemHanlder = () => {
    dispatch(
      cartActions.addItem({
        id,
        price,
        title: name,
      })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItemHandler}>-</button>
          <button onClick={addCartItemHanlder}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
