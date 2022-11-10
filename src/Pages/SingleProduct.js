import React from "react";
import '../Styles/SingleProduct.css'
import Foto1 from "../Assets/Foto-1.png"

const SingleProduct = () => {
    return (
        <div>
            <h5 className="productTag">Fable of Klassik - Jacket</h5>

            <div className="sinProductCon">
                <div className="sinProductImgCon">
                    <img src={Foto1} alt='single product image' />
                </div>
                <div className="sinProductDesCon">
                    <h1 className="sinProductHeading">JAСKET KLS</h1>
                    <h2 className="sinProductPrice">$105</h2>
                    <button className="sinProductButton">Add to cart</button>

                    <div>
                        <h4 className="sinProductDesHeading">Product Info</h4>
                        <p className="sinProductDes">Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pockets and one hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct