import "./shop.css";
import ProductData from "../Products/ProductData";
import Product from "../Products/Product";
import { useState } from "react";

const ShopProduct = (props) => {
    const [products, setProducts] = useState(ProductData)

    const productFilter = (e) => {
        let data = ProductData.filter(prod => prod.category === `${e.target.value}`)
        setProducts(data)
        console.log(e.target.value)
    }

  return (
    <section className="container-fluid py-5 mb-5 shop-products">
        <div className="container">
            <div className="row">
                <div className="">
                    <h2>Store</h2>
                </div>
            </div>

            <div className="row g-3">
                <div className=" col-lg-3 col-md-4">
                    <div>
                        <h3>    


                              
                        </h3>
                    </div>
                    <div>
                        <button className="btn btn-dark" style={{margin: "0 3px 3px 0 "}} value="phone" onClick={productFilter}>Phones</button>
                        <button className="btn btn-dark" style={{margin: "0 3px 3px 0 "}} value="laptop" onClick={productFilter}>Laptops</button>
                        <button className="btn btn-dark" style={{margin: "0 3px 3px 0 "}} value="speaker" onClick={productFilter}>Speakers</button>
                        <button className="btn btn-dark" style={{margin: "0 3px 3px 0 "}} value="headphone" onClick={productFilter}>Headphones</button>
                        <button className="btn btn-dark" style={{margin: "0 3px 3px 0 "}} value="monitor" onClick={productFilter}>Monitors</button>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="row">
                    {products.map((product, i) => {
                    return  <div className="col-lg-4 col-sm-6 text-center p-3">
                                <Product 
                                key={i}
                                imgurl={product.imgurl}
                                name={product.name}
                                price={product.price} />
                            </div>
                     }) }
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ShopProduct