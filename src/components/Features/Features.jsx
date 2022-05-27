import "./features.css";

import React from 'react'
import FeaturesData from "./FeaturesData";
import Feature from "./Feature";

const Features = () => {
  return (
    <section className="container-fluid py-5">
        <div className="container features-content">
            <div className="row">
                <div className="col-md-8 text-center mx-auto">
                    <h2>Our Products Features</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
            </div>
            <div className="row text-center py-3 g-5">

                {/* using map method, getting data from local json */}
                { 
                    FeaturesData.map((feature, i) => {
                        return <Feature
                                    key={i}
                                    title={feature.title}
                                    text={feature.text} />
                    })
                }

                {/* normal HTML */}
                {/* <div className="col-md-3">
                    <div className="box">
                        <h5>High Quality</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam tempore hic quia.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <h5>User Friendly</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam tempore hic quia.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <h5>Awesome Design</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam tempore hic quia.</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <h5>Latest Technology</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam tempore hic quia.</p>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Features