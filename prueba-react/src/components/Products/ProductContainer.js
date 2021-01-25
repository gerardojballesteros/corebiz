import { Component } from 'react';
import './products.sass';
import cats from './descarga.jpeg';
import star from './star.png';
import starUse from './star_alt.png';


class productContainer extends Component{
   constructor (props) {
       super(props)
    this.state = {
        product: [],
        isFetch: true,
    }
   }
   componentDidMount () {
        fetch('https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products')
        .then(response => response.json())
        .then(productJSON => this.setState({ product: productJSON, isFetch: false }))
   }
   render() {
       const { isFetch, product } = this.state
       if (isFetch){
            return 'Cargando...'
       }
       const productName = this.state.product[2].product
    return (
         <div className="card">
             <div className="wrap-card">
                 <ul>
                     <li>
                     <div className="card-items">
                    <div className="img-card">
                        <img src={cats} alt=""/>
                    </div>
                    <div className="card-container">
                        <div className="txt-card">
                            <p>{productName}</p>
                            <div className="star">
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={starUse} alt=""/>
                            </div>
                        </div>
                        <div className="precio">
                            <h1>por R$ 259,90</h1>
                            <p>ou em 9x de R$ 28,87</p>
                        </div>
                        <div className="btn">
                            <a href="#">COMPRAR</a>
                        </div>
                    </div>
                 </div>
                     </li>
                     <li>
                     <div className="card-items">
                    <div className="img-card">
                        <img src={cats} alt=""/>
                    </div>
                    <div className="card-container">
                        <div className="txt-card">
                            <p>{productName}</p>
                            <div className="star">
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={starUse} alt=""/>
                            </div>
                        </div>
                        <div className="precio">
                            <h1>por R$ 259,90</h1>
                            <p>ou em 9x de R$ 28,87</p>
                        </div>
                        <div className="btn">
                            <a href="#">COMPRAR</a>
                        </div>
                    </div>
                 </div>
                     </li>
                     <li>
                     <div className="card-items">
                    <div className="img-card">
                        <img src={cats} alt=""/>
                    </div>
                    <div className="card-container">
                        <div className="txt-card">
                            <p>{productName}</p>
                            <div className="star">
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={starUse} alt=""/>
                            </div>
                        </div>
                        <div className="precio">
                            <h1>por R$ 259,90</h1>
                            <p>ou em 9x de R$ 28,87</p>
                        </div>
                        <div className="btn">
                            <a href="#">COMPRAR</a>
                        </div>
                    </div>
                 </div>
                     </li>
                     <li>
                     <div className="card-items">
                    <div className="img-card">
                        <img src={cats} alt=""/>
                    </div>
                    <div className="card-container">
                        <div className="txt-card">
                            <p>{productName}</p>
                            <div className="star">
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={star} alt=""/>
                                <img src={starUse} alt=""/>
                            </div>
                        </div>
                        <div className="precio">
                            <h1>por R$ 259,90</h1>
                            <p>ou em 9x de R$ 28,87</p>
                        </div>
                        <div className="btn">
                            <a href="#">COMPRAR</a>
                        </div>
                    </div>
                 </div>
                     </li>
                 </ul>
             </div>
         </div>
    )

   }

}

export default productContainer


