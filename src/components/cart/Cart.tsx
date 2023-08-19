import "./cart.css";

import { useDispatch, useSelector } from "react-redux";
import { closeCart, useIsCartOpen } from "../../redux/cart/sliceIsCartOpen";
import { useCart } from "../../redux/cart/sliceCart";
import CartItem from "../cartItem/CartItem";



function Cart() {

    const isCartOpenDispatch = useDispatch();
    const isCartOpen = useSelector(useIsCartOpen);

    const toggleCart = () => {
        isCartOpenDispatch(closeCart());
    }


    const cart = useSelector(useCart);


    return ( 
        <div style={{position: "relative", zIndex: 2}}>
            <div id="drawer" className={isCartOpen ? "drawer open" : "drawer"}>
                <div className="cart-header">
                    <h3>Carrinho de Compras</h3>
                    <button onClick={toggleCart}>&#10006;</button>
                </div>
                <div className="cart-body">
                    {
                        cart.map(({id, thumbnail_id, title, price}) => (
                            <CartItem id={id} thumbnail_id={thumbnail_id} title={title} price={price} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Cart;