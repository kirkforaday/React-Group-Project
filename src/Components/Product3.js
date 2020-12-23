import React, {Component} from 'react';
import disk from '../Images/disk.jpeg';

class Product3 extends Component {
    render(){
      return(
        <div>
          <h1>2020 Round Ornament</h1>
          <h3>Pretty much sums up how we all feel about 2020 on an attractive faux wood ornament</h3>
          <h4>$14.99</h4>
          <img class="picture" src={disk} alt="2020 Ornament" />
        </div>
      );
    }
  }

  export default Product3;