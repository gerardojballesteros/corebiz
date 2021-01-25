import React from 'react';
import './navbar.sass';
import loguito from '../Navbar/logo.png';
import user from '../Navbar/account.png';
import carrito from '../Navbar/shopping-cart.png';


function Navbar() {
    return (
        <>
            <nav>
                <div className="wrap-nav">
                    <div className="logo">
                        <img src={ loguito } width="400"  alt=""/>
                    </div>
                    <ul>
                        <li>
                            <form action="">
                                <input type="search" placeholder="O que está procurando?"/>
                                <i className="fa fa-search"></i>
                            </form>
                        </li>
                    </ul>
                    <div className="wrap-cart">
                        <div className="user">
                            <img src={ user } alt=""/>
                            <p>Minha Conta</p>
                        </div>
                        <div className="cart">
                            <img src={ carrito } alt=""/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
