import "./features.css";
// import FeaturesData from "./FeaturesData";

import React from 'react'

const Feature = (props) => {
  return (
            <div className="col-sm-6 col-lg-3">
                    <div className="boxx">
                        <h5>{props.title}</h5>
                        <p className="mt-2">{props.text}</p>
                    </div>
            </div>
           
  )
}

export default Feature