import IProducts from "../../interfaces/product";
import "./product.css"


function Product(props: IProducts) {

    return ( 
        <div className="product-item">
            <div className="product-item-thumb">
                <img src={`https://http2.mlstatic.com/D_NQ_NP_2X_${props.thumbnail_id}-F.webp`} />
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