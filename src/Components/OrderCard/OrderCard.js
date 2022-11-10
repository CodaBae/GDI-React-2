import React from "react";
import Foto from "../../Assets/Foto-1.png"
import './OrderCard.css'


const OrderCard = () => {
    return (
        <div className="orderCardGeneralCon">
            <div className="orderCardImgCon">
                <img src={Foto} alt='order image' />
            </div>
            <div>
                <div>
                    <h1>Jacket KLS</h1>
                    <p>Collection: KLASSIK OF FABLE</p>
                    <p>Article: H0522001</p>
                </div>
                <div>
                    <h1>Size : F</h1>
                    <h1>Color : Black</h1>
                    <h1>Quantity : 1</h1>


                </div>
                <div>
                    <h1>Price : $105</h1>

                    <button>Delete</button>

                </div>

            </div>

        </div>
    )
}

export default OrderCard