import React from "react";


const Form = () => {
    return (

        <div>
            <form>
                <div>
                    <h4>City</h4>
                    <input placeholder="Enter City" />
                    <h4>Address</h4>
                    <input placeholder="Enter Address" />
                </div>


                <div>
                    <h4>Recipient's details</h4>

                    <label>Name and Surname</label>
                    <input placeholder="Enter Details" />
                    <label>Phone</label>
                    <input placeholder="Enter Phone" />
                    <label>Email</label>
                    <input placeholder="Enter Email" />
                </div>

                <div>
                    <h4>Payment Method</h4>

                    <button>Payment card</button>
                    <button>Cash on delivery</button>

                </div>

                <div>
                    <input type='checkbox' />
                    <p>I agree to the terms of the offer and the loyalty policy</p>
                </div>

                <div>
                    <button> Place an order</button>
                </div>


            </form>
        </div>
    )
}

export default Form