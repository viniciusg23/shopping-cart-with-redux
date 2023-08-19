import { useState, useEffect } from "react"
import "../../App.css";
import "./header.css";
import fetchProducts from "../../api/fetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../redux/products/sliceProducts";
import Cart from "../cart/Cart";
import { openCart, useIsCartOpen } from "../../redux/cart/sliceIsCartOpen";

function Header() {

    const login = () => {
        alert("É só um exemplo, essa funcionalidade não foi implementada :|")
    }


    const isCartOpenDispatch = useDispatch();
    let isCartOpen = useSelector(useIsCartOpen);

    const toggleCart = () => {
        isCartOpenDispatch(openCart());
    }



    const productsDispatch = useDispatch();

    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    const handleSearch = async () => {
        setLoading(true);

        const products = await fetchProducts(query);
        productsDispatch(updateProducts(products));

        setLoading(false);
    }

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            await handleSearch();
        }
    }


    return (
        <>
            <div className="header-container">
                <header>
                    <div className="form-input">
                        <h2 className="color-white logo" onClick={() => { window.location.reload() }}>Redux Commerce</h2>
                        <div className="form-control lg">
                            <input
                                id="product-query"
                                type="text"
                                placeholder="Buscar"
                                onChange={(event) => setQuery(event.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <button onClick={handleSearch}>
                                <img src="./lupa.png" />
                            </button>
                        </div>
                    </div>
                    <div className="buttons">
                        <a className="color-white header-function" onClick={login}>
                            <img src="./user.png" />
                        </a>
                        <a className="color-white toggle-btn header-function" onClick={toggleCart}>
                            <img src="./shopping-cart.png" />
                        </a>
                    </div>
                </header>
                <div className="form-control sm">
                    <input
                        id="product-query"
                        type="text"
                        placeholder="Buscar"
                        onChange={(event) => setQuery(event.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSearch}>
                        <img src="./lupa.png" />
                    </button>
                </div>
            </div>

            <Cart />
        </>
    );
}

export default Header;