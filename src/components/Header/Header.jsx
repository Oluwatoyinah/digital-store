import React from 'react';
import "./header.css";
import headerPic from "../../assets/apple-watch.png"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='container-fluid pb-5 mb-5'>
        <div className="container header">
            <div className="row g-5">
                <div className="col-md-6 header-text">
                    <h1>Best & Smart Digital Products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam expedita inventore ea, deserunt voluptatem voluptate suscipit eum optio iste soluta quod eos?</p>
                    <div className="buttons mt-3">
                      <Link className='btn-red' to="/shop">Explore</Link>
                    </div>
                </div>
                <div className="col-md-6 header-image">
                   <img src={headerPic} alt="header" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header