import React from "react";
import Form from "../Components/Form/Form"
import OrderCard from "../Components/OrderCard/OrderCard"
import Sum from "../Components/Sum/Sum"
import "../Styles/Cart.css"



const Cart = () => {
    return (
        <div className="cartCon">
            <div className="formCon">
                <Form />
            </div>
            <div className="orderCardCon">
                <div>
                    <OrderCard />
                </div>
                <div>
                    <Sum />
                </div>

            </div>

        </div>
    )
}

export default Cart