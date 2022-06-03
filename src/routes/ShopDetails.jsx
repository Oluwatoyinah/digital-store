import React from 'react';
import Product from "../components/Products/Product";

const ShopDetails = (props) => {
  return (
    <div className='container-fluid py-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    flsfkjs
                    <img src={props.imgUrl} alt="" />
                </div>

                <div className="col-md-5">
                    <div>
                        <h2>{props.name}</h2>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopDetails