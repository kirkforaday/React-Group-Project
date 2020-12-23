import React, {Component} from 'react';
import fauci from '../Images/fauci.jpg';
import CountManager from './PurchaseButton';

class Product1 extends Component {
    render(){
      return(
        <div>
          <h1>Fauci Ornament</h1>
          <h4>Practically life-size ornament commemorating the most talked about American scientist of 2020</h4>
          <h4>$17.99</h4>
          <img class="picture" src={fauci} alt="Fauci Ornament" />
          <CountManager />
        </div>
      );
    }
  }

  export default Product1;