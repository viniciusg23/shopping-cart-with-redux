import "./products.css"
import { useSelector } from "react-redux";
import { useProducts } from "../../redux/products/sliceProducts";
import Product from "../product/Product";

function Products() {

    const products = useSelector(useProducts);

    return ( 
        <div className="products-container">
            <Product 
                id={"123"}
                title={"iPad 9ª Geração 10.2  Wi-fi 64gb Cinza-espacial Apple"}
                thumbnail_id={"906272-MLA47916670099_102021"}
                price={2144}
            />
        </div>
    );
}

export default Products;