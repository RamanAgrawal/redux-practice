import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartSlice';

const CartButton = (props) => {
  const { showCart } = cartActions
  const quantity=useSelector(state=>state.cart.quantity)
  const dispatch = useDispatch()
  const showCartHandler = () => {
    dispatch(showCart())
  }
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
