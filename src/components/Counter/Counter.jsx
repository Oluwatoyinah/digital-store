
import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0,
        min: 0,
        max: 10
    }

    handleIncrement = () => {
        if (this.state.count < this.state.max) {
            this.setState({count: this.state.count + 1})
        }
    }

    handleDecrement = () => {
        if (this.state.count > this.state.min) {
            this.setState({count: this.state.count - 1})
        }
        
    }

    formatCount = () => {
        return this.state.count === 0 ? "0" : this.state.count
    }

    

    render() {

        let classes = this.reduceBtn()
        return (
            <div className='mb-4'>
                <div className="mb-0">
                    <h6>Quantity:</h6>
                </div>
                <div>
                    <button 
                        onClick={this.handleDecrement} 
                        style={{outline: "none"}} 
                        className={this.reduceBtn()}>
                            -
                    </button>
                    <span className="mx-2">
                        {this.formatCount()}
                    </span>
                    <button 
                        onClick={this.handleIncrement} 
                        style={{outline: "none"}} 
                        className={this.increaseBtn()}>
                        +
                    </button>                                
                </div> 
            </div> 
        )
    }

    reduceBtn() {
        let classes = "badge border-0 p-2 badge-"
        classes += (this.state.count > 0) ? "danger" : "secondary"
        return classes
    }

    increaseBtn() {
        let classes = "badge border-0 p-2 badge-"
        classes += (this.state.count < 10) ? "danger" : "secondary"
        return classes
    }
}

