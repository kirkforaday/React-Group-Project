import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from './components/ProductList';


class Routes extends Component {
    render() {
      return (
        <div>
          <Router>
            <hr />
            <Route name="ProductList" exact path="/" component={ProductList} />
          </Router>
        </div>
      );
    }
  }
  
  export default Routes;