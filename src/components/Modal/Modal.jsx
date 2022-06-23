import React from 'react';
import "./modal.css";
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";

const Modal = ({imgurl, openModal, productName, productPrice}) => {
  return (
            <div className="modal active">   
                <div className="popup active center" style={{position: "relative"}}>
                    
                        <button className='btn btn-danger' style={{position: "absolute", top:10, right: 10}} onClick={() => {openModal(false)}}>&times;</button>

                    <div className="row g-3 py-3">
                        <div className="col-md-6">
                            <div className="icons py-3 text-center">
                                <img src={imgurl} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 py-auto">
                            <h3>{productName}</h3>
                            <p className='mb-0'><span>By </span> <span className='tx-red'>Apple</span></p>
                            <h5><span className='tx-red'>{productPrice}</span></h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat suscipit sit rem deleniti incidunt blanditiis reprehenderit. ue. A, est! Omnis, soluta? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, delectus!</p>

                            <div className="">
                                <Counter />
                            </div>

                            <div className="description tx-blue mt-3">
                                <Link className="btn-red mr-2" to={{ pathname: "/cart"}}>
                                    <FaShoppingCart size={18} className="mb-1 mr-2 " />
                                    Add to Cart 
                                </Link>

                                <Link className="btn-white" to={{ pathname: "/wishlist"}}>
                                    <FaHeart size={18} className="mb-1 mr-2" />
                                    WishList
                                </Link> 
                            </div>

                            
                        </div>
                    </div>  
                </div>
            </div>
  )
}

export default Modal