import "./products.css"
import { useSelector } from "react-redux";
import { useProducts } from "../../redux/products/sliceProducts";
import Product from "../product/Product";

function Products() {

    const products = useSelector(useProducts);

    return ( 
        <div className="products-container">
            <div className="products-list">
                {
                    products.map((product) => (
                        <Product 
                            id={product.id}
                            title={product.title}
                            thumbnail_id={product.thumbnail_id}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Products;