import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import ProductList from "./components/Products/productList";
import Details from "./components/Details/details";
import Default from "./components/Default/default";
import Cart from "./components/Cart/cart";
import StoreProvider from "./components/context_api";
import Modal from "./components/modal";
 
function App() {
  return (
    <div className="App">
      <StoreProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>
      </Switch>
      <Modal />
      </StoreProvider>
    </div>
  );
}

export default App;
