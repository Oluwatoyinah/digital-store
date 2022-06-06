import "./product.css";
import ProductData from "./ProductData";
import Product from "./Product";

import React from 'react'
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <section className="container-fluid py-5 mb-5 products">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <h2>Latest Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            <div className="row g-3">
                {ProductData.map((product, i) => {
                    return <Product 
                    key={i}
                    imgurl={product.imgurl}
                    name={product.name}
                    price={product.price} />
                }).filter((product, i) => i <= 3)}
            </div>

            <div className="text-center mt-5">
                <Link className="btn-red" to="/shop">View All Products</Link>
            </div>
        </div>
    </section>
  )
}

export default Products