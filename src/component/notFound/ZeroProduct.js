import React from "react";
import { ImSad } from "react-icons/im";
import "./ZeroProduct.css"; 

function ZeroProduct() {
    return (
        <div id="zero-product-container">
            <h4>Il y a aucun produit en stock !</h4>
            <ImSad id="sad-icon" />
        </div>
    )
};

export default ZeroProduct;