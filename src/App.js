import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsView from './views/Products/Products';
import ProductDetail from './views/ProductDetail/ProductDetail';
import CustomNavbar from './components/Navbar/Navbar';
import { CartContext } from './Context/CartContext';
import ShoppingList from './views/ShoppingList/ShoppingList';

function App() {

  const [cart, setCart] = useContext(CartContext)

  useEffect(()=>{
    if(cart.length === 0 && localStorage.getItem('cart').length > 0)  setCart(JSON.parse(localStorage.getItem('cart')))
  },[])

  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route exact path="/" name="Inicio" component={ProductsView} />
        <Route exact path="/product/detail/:idItem" name="ProductDetail" component={ProductDetail} />
        <Route exact path="/shoppingList" name="ShoppingList" component={ShoppingList} />
      </Switch>
    </Router>
  );
}

export default App;
