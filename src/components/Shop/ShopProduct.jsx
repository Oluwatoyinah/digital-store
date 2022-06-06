import "./shopProduct.css";
import ProductData from "../Products/ProductData";
import Product from "../Products/Product";

import React from 'react'

const ShopProduct = (props) => {
  return (
    <section className="container-fluid py-5 mb-5 shop-products">
        <div className="container">
            <div className="row">
                <div className="">
                    <h2>Our Products</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
                </div>
            </div>

            <div className="row g-3">
                {ProductData.map((product, i) => {
                    return <Product 
                    key={i}
                    imgurl={product.imgurl}
                    name={product.name}
                    price={product.price} />
                })}
            </div>
        </div>
    </section>
  )
}

export default ShopProduct