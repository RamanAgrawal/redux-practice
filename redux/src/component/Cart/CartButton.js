import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';

const CartButton = (props) => {
  const { showCart } = cartActions
  const dispatch = useDispatch()
  const showCartHandler = () => {
    dispatch(showCart())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
