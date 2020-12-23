import React, {Component} from 'react'





    class ProductList extends Component {
        render(){
            return(
                <div>

                    


                    <div class="title">
                    <h1><strong>Noel Novelties</strong></h1>
                    </div>
                
                    <div >
                        <ul class="container">
                            <li class= "container__img--1">
                            
                            <div class="frame">
                            <a href= '/Product1'><img  alt="handmade ornaments"  src="https://plaidonline.com/getattachment/Learn/LetsPaint/LetsPaintLive/Handmade-Holiday-Ornaments/POL_XMAS_bty_Ornaments_18_101719.jpg" width="400px" height="400px" /></a> 
                            </div>
                            
                            
                            </li>
                        
                            <li class= "container__img--2">
                            
                            <div class="frame">
                            <a href= '/productpage2'><img alt="fairyseason"  src="https://images.fairyseason.com/2020/11/06/489378_101491009_124.jpg" width="400px" height="400px"/></a>
                            </div>
                            
                            
                            </li>
                            
                            <li class= "container__img--3">
                            
                            <div class="frame">
                            <a href= '/productpage3'><img alt="simple ornament"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfTcpBggGgQ9Me7u1XnVbYbvbTrI8O3RZ_GaCGj1qjiXnFe0-Ejug9be8PQ&amp;usqp=CAc"width="400px" height="400px"/></a>
                            </div>
                            
                            
                            </li>
                        
                            <li class= "container__img--4">
                            
                            <div class="frame">
                            <a href= '/productpage4'><img alt="simple ornament" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXnK5ZtVnw9dt05i6_eqf4a5He_Z-9Bsd90tW-K5ZfpxDlAwKmcNbyvHSf-0&amp;usqp=CAc"width="400px" height="400px"/></a>
                            </div>
                            
                            
                            </li>

                        </ul>
                    </div>
                </div>
            );
        }
    }
    
export default ProductList;