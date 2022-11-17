import React, { useState, useEffect } from "react";
import "../Styles/Home.css"
import Product from "../Components/Product/Product";
import axios from "axios";
import { Link } from 'react-router-dom'


const Home = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get('https://charming-ray-flannel-nightgown.cyclic.app/api/products')
                setProduct(data.data.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])



    return (

        <div className="homeCon">

            <div className="homeFirstCon">
                <h1>FABLE OF KLASSIK</h1>
                <h3>Jackets KLS</h3>
            </div>
            <div className="homeSecCon">
                {
                    product.map((item) => (

                        <Link to={`/single-product/${item._id}`}>
                            <Product data={item} key={item._id} />
                        </Link>

                    )
                    )
                }

            </div>
        </div>
    )
}

export default Home