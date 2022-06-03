import "./product.css";
// import ProductData from "./ProductData";
import { FaShoppingCart } from 'react-icons/fa'
import React from 'react'
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";

const Product = (props) => {
  return (
            <div className="col-lg-3 col-sm-6 text-center p-3">
                    <div className="box">
                        <img src={props.imgurl} imgurl={props.imgurl} alt="img" />
                        <p>{props.name}</p>
                        <Counter />
                        <div className="text-center mt-4">
                          <Link className="btn-red" to={{ pathname: "/shopdetails"}}>Add to Cart
                          <FaShoppingCart size={18} className="mb-1" />
                          </Link>
                        </div>
                    </div>
            </div>
  )
}

export default Product