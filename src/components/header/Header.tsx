import { useState } from "react"
import "../../App.css";
import "./header.css";

function Header() {

    const login = () => {
        console.log("login");
    }

    const cart = () => {
        console.log("cart");
    }


    const [query, setQuery] = useState<string>("");
    const search = () => {
        console.log(query);
    }

    return ( 
        <header>
            <div className="form-input">
                <h2 className="color-white">Redux Commerce</h2>
                <div className="form-control">
                    <input 
                        id="product-query" 
                        type="text" 
                        placeholder="Buscar" 
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button onClick={search}>
                        <img src="./lupa.png" />
                    </button>
                </div>
                
            </div>
            <div className="buttons">
                <a className="color-white" onClick={login}>Login</a>
                <a className="color-white" onClick={cart}>Carrinho</a>
            </div>
        </header>
    );
}

export default Header;