import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';
const ProductItem = (props) => {
  const { title, price, description ,id} = props;
  const {add}=cartActions
  const dispatch=useDispatch()
const addtoCartHandler=()=>{
dispatch(add({ title, price, description ,quantity:1,id}))
}
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
