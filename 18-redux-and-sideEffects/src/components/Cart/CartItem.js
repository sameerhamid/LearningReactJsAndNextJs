import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { name, quantity, totalPrice, price } = props;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        totalPrice: props.price,
      })
    );
  };
  const handleRemoveItem = () => {
    dispatch(cartActions.removeItemToCart(props.id));
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
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
