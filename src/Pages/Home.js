import React from "react";
import "../Styles/Home.css"
import Product from "../Components/Product/Product";
import { ProductData } from "../Utils/productData"


const Home = () => {
    return (
        <div className="homeCon">
            <div className="homeFirstCon">
                <h1>FABLE OF KLASSIK</h1>
                <h3>Jackets KLS</h3>
            </div>
            <div className="homeSecCon">
                {
                    ProductData.map((item,id) =>
                        <Product data={item} key={id} />)
                }

            </div>
        </div>
    )
}

export default Home