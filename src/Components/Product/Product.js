import React from "react";
import Foto1 from "../../Assets/Foto-1.png"
import "./Product.css"

const Product = ({data}) => {
    return (
        <div>
            <div className="productFristCon">
                <img src={data.image[0]} alt='foto-1'/>
            </div>
            <div className="ProductSecCon">
                <h3>{data.name}</h3>
                <h1>${data.price}</h1>
            </div>

        </div>
    )
}

export default Product