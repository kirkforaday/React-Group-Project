import React, {Component} from 'react';
import goat from '../Images/goat.jpeg';

class Product4 extends Component {
    render(){
      return(
        <div>
          <h1>Ball Ornament</h1>
          <h4>Who doesn't like an animal with a Santa hat on?</h4>
          <h4>$10.99</h4>
          <img class="picture" src={goat} alt="Ball Ornament" />
        </div>
      );
    }
  }

  export default Product4;