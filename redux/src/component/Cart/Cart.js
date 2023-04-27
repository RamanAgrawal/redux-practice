import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/CartSlice';

const Cart = (props) => {
  const cartitems=useSelector(state=>state.cart.items)
const dispatch=useDispatch()
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems.map(item=>(

        <CartItem key={item.id}
          item={item}
        />
        ))}
      </ul>
      <button onClick={()=>{dispatch(cartActions.hideCart())}}>HideCart</button>
    </Card>
  );
};

export default Cart;
