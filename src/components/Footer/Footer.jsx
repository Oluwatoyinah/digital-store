import "./footer.css";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa"

import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid py-5 footer">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-4 col-lg-3">
                    <h2>Toyin.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem provident corporis.</p>

                    <div className="socials">
                        <FaFacebook size={20} style={{color:"white", marginRight: "10"}}/>
                        <FaTwitter size={20} style={{color:"white", marginRight: "10"}}/>
                        <FaGithub size={20} style={{color:"white", marginRight: "10"}}/>
                    </div>
                </div>
                <div className="col-md-5 col-lg-3">
                    <div>
                        <h5>Contact Us</h5>
                        <p className="mb-0">info@toyinstore.com</p>
                        <p>+1 285 3482 42</p>
                    </div>

                    <div>
                        <h5>Our Office</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nostrum dolorem debitis.</p>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 quick-links">
                    <h5>Quick Links</h5>
                    <ul>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li>
                            <Link to="/">FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-3 mx-auto">
                    <div>
                        <h5>Subscribe</h5>
                        <p>Be the first to know about our new products</p>
                        <div className="d-flex gap-2">
                            <input type="text" className="form-control" />
                            <button className="btn btn-success">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer