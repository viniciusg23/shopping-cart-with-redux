import { useDispatch } from "react-redux";
import IProducts from "../../interfaces/product";
import "./cartItem.css"
import { removeCartItem } from "../../redux/cart/sliceCart";

function CartItem(props: IProducts) {

    const cartDispatch = useDispatch();
    
    const handleCartItem = () => {
        cartDispatch(removeCartItem(props));
    }

    return (
        <div className="cart-item">
            <div className="cart-item-header">
                <div className="cart-item-hover">
                    <div className="remove-icon">
                        <img src="./remove.png" onClick={handleCartItem}/>
                    </div>
                </div>
                <img className="cart-item-image" src={`https://http2.mlstatic.com/D_NQ_NP_2X_${props.thumbnail_id}-F.webp`} />
            </div>
            <div className="cart-item-body">
                <h4 className="color-white">{`R$ ${props.price}`}</h4>
                <p className="color-white">{props.title}</p>
            </div>
        </div>
    );
}

export default CartItem;
