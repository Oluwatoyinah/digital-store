import "./shop.css";
import React, { useState, useEffect } from 'react';
import ProductData from "../Products/ProductData";

const ShopProduct = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const handleClick = (e) => {
        setCurrentPage(e.target.id)
        
    }
    const pages = [];

    for(let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i)
    } 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.splice(indexOfFirstItem,indexOfLastItem)

    const renderPageNumbers = pages.map((number) => {
        return (
            <li key={number} id={number} onClick={handleClick}>{number}</li>
        )
    })
    console.log(currentPage)
    console.log(currentItems)

    useEffect(() => {
        setIsLoading(true) 
        setData(ProductData)
        console.log(data)
        setIsLoading(false) 
    }, [ isLoading]);
    

  return (
    <section className="container-fluid py-5 mb-5 shop-products">
        <div className="container">
            <div className="row">
                <div className="">
                    <h2>Our Products</h2>
                </div>
            </div>

            <div className="row g-3">
                {isLoading ? <h2>Loading....</h2> : currentItems.map((item, i) => <h4 key={i}>{item.name}</h4>)}

                <ul className="pageNumbers">{renderPageNumbers}</ul>
            </div>

        </div>
    </section>
  )
}

export default ShopProduct