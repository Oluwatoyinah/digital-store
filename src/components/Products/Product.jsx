import "./product.css";
import {useState } from 'react';
// import ProductData from "./ProductData";
import React from 'react';
import Modal from "../Modal/Modal";

const Product = ({imgurl, name}) => {

    const [openModal, setOpenModal] = useState(false);

  return (
            <>
              <div className="col-lg-3 col-sm-6 text-center p-3">
                    <div className="box">
                        <img src={imgurl}  alt="img" />
                        <p className="fw-bold">{name}</p>
                        
                        <div className="text-center mt-4">
                         
                          <button className="btn-red" onClick={() => {setOpenModal(true)}} closeModal={setOpenModal}>View More</button>
                        </div>
                    </div>
              </div>
              {openModal && <Modal imgurl={imgurl} openModal={setOpenModal} productName={name} />}
            </>
  )
}

export default Product