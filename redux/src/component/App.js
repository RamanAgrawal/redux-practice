
import './App.css';
import Layout from './Layout/Layout'
import Cart from './Cart/Cart'
import Products from './Shop/Products'
import { useSelector } from 'react-redux';
function App() {
const showCart=useSelector(state=>state.cart.showCart)
  return (
    
    <Layout>
      {showCart&&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
