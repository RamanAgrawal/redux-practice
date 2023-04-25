
import { Fragment } from 'react';
import './App.css';

import Counter from './Counter';
import Header from './Header';
import Auth from './Auth';
function App() {

  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
