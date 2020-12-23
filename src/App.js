import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/Components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/ProductList';
import Product1 from './Components/Product1';
import Product2 from './Components/Product2';
import Product3 from './Components/Product3';
import Product4 from './Components/Product4';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path ="/product1" component={Product1} />
     
    </Switch>
    <Footer />
    </>
  );
}

export default App;





