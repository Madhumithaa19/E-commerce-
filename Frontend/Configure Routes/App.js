import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Product/ProductList';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default App;
