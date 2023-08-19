import "./product.css"

import { useDispatch } from "react-redux";
import IProducts from "../../interfaces/product";
import { addCartItem } from "../../redux/cart/sliceCart";
import { useState } from "react";


function Product(props: IProducts) {

    const cartDispatch = useDispatch();

    const [isClassAdded, setIsClassAdded] = useState<boolean>(false);
    const handleProduct = () => {

        setIsClassAdded(true);

        cartDispatch(addCartItem(props));

        setTimeout(() => {
            setIsClassAdded(false);
        }, 8000)
    }

    return ( 
        <div className="product-item">
            <div className="product-item-thumb">
                <div className="product-hover">
                    <div className={isClassAdded ? "cart-icon added" : "cart-icon"} onClick={handleProduct}>
                        <img src="./add-to-cart.png" />
                    </div>
                </div>
                <img className="product-image" src={`https://http2.mlstatic.com/D_NQ_NP_2X_${props.thumbnail_id}-F.webp`} />
            </div>
            <hr />
            <div className="product-item-info">
                <p>{`R$ ${props.price.toFixed(2)}`}</p>
                <span>{props.title}</span>
            </div>
        </div>
    );
}

export default Product;