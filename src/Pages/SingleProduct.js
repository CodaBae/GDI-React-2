import React, {useState, useEffect}from "react";
import '../Styles/SingleProduct.css'
import Foto1 from "../Assets/Foto-1.png"
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(0)

    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        (async () => {
            try {
                const data = await axios.get(`https://charming-ray-flannel-nightgown.cyclic.app/api/products/${id}`)
                setProduct(data.data.data)
                setLoading(true)
            } catch (error) {
                console.log(error)
            }
        })()
    })
  

    return (
      <div>
        {loading ? ( <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(10)}}>click</button>
            <h5 className="productTag">Fable of Klassik - Jacket</h5>

            <div className="sinProductCon">
                <div className="sinProductImgCon">
                    <img src={product.image ? product.image[0]:''} alt='single product image' />
                </div>
                <div className="sinProductDesCon">
                    <h1 className="sinProductHeading">{product.name}</h1>
                    <h2 className="sinProductPrice">${product.price}</h2>
                    <button className="sinProductButton">Add to cart</button>

                    <div>
                        <h4 className="sinProductDesHeading">Product Info</h4>
                        <p className="sinProductDes">{product.desc}</p>
                    </div>

                </div>
            </div>
        </div>):(
            <h1>loading...</h1>
        )}
      </div>
    )
}

export default SingleProduct