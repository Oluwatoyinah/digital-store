import "./shopProduct.css";
import ProductData from "../Products/ProductData";
import Product from "../Products/Product";
// import axios from "axios";
import React, { useState, useEffect } from 'react'
// import Products from "../Products/Products";
// import Pagination from "../Pagination/Pagination";

const ShopProduct = (props) => {

    // const [shop, setShop] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage] = useState(12);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true);
    //         const res = await ProductData;
    //         setShop(res);
    //         setLoading(false)
    //     }

    //     fetchPosts();
    // }, [shop]);

    // console.log(shop)

    // const indexOfLastPost = currentPage * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const currentPosts = ProductData.slice(indexOfFirstPost, indexOfLastPost);

    // console.log(currentPosts);

    // // change page
    // const paginate = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // } 

    // console.log(currentPage)

  return (
    <section className="container-fluid py-5 mb-5 shop-products">
        <div className="container">
            <div className="row">
                <div className="">
                    <h2>Our Products</h2>
                </div>
            </div>

            <div className="row g-3">
                {/* {ProductData.map((product, i) => {
                    return <Product 
                    key={i}
                    imgurl={product.imgurl}
                    name={product.name}
                    price={product.price} />
                })} */}

                {ProductData.map((product, i) => {
                                    return <Product 
                                    key={i}
                                    imgurl={product.imgurl}
                                    name={product.name}
                                    price={product.price} />
                                })}
            </div>

            {/* <Pagination postPerPage={postPerPage} totalPosts={ProductData.length} paginate={paginate} /> */}
        </div>
    </section>
  )
}

export default ShopProduct