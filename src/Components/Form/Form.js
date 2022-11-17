import React, {useState, useEffect} from "react";
import axios from "axios";

const Form = () => {
    const [city,setCity] = useState('')
    const [address,setAddress] = useState('')
    const [fullName,setFullName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const [error,setError] = useState('')
    const [success,setSuccuss] = useState('')

const handleSubmit = async(e) =>{
    e.preventDefault();
    let data = {
        city,address,fullName,phone,email
    }

    try {
       let response =  await axios.post("https://charming-ray-flannel-nightgown.cyclic.app/api/customer", data)
       setSuccuss(response.data.message)
       setError('')
    } catch (error) {
        setError(error.response.data.message)
    }  
}




    return (

        <div>
            <form onSubmit={handleSubmit}>

                <p style={{color:'green'}}>{success}</p>
                <p  style={{color:'red'}}>{error}</p>

                <div>
                    <h4>City</h4>
                    <input placeholder="Enter City"  onChange={(e)=> setCity(e.target.value)}/>
                    <h4>Address</h4>
                    <input placeholder="Enter Address" onChange={(e)=> setAddress(e.target.value)} />
                </div>


                <div>
                    <h4>Recipient's details</h4>

                    <label>Name and Surname</label>
                    <input placeholder="Enter Details" onChange={(e)=> setFullName(e.target.value)}/>
                    <label>Phone</label>
                    <input placeholder="Enter Phone" onChange={(e)=> setPhone(e.target.value)} />
                    <label>Email</label>
                    <input placeholder="Enter Email" onChange={(e)=> setEmail(e.target.value)} />
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
                    <button type="submit"> Place an order</button>
                </div>


            </form>
        </div>
    )
}

export default Form