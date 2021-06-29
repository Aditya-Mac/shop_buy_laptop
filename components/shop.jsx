import React, { Component } from 'react'
import './shop.css'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfLaptops: 10
        }
    }

    buyLaptops = () => this.setState({
        numOfLaptops: this.state.numOfLaptops - 1

    })



    render() {
        return (
            <div>
                <h1 className="title">welcome to shop</h1>
                <div className="item">
                    <h3 ID="hp">HP laptops</h3>
                    <div className="number">
                        {this.state.numOfLaptops > 0 ? <h3>Avaliable : {this.state.numOfLaptops}</h3> : <h3>Oops! out of stock</h3>}
                        <br />
                        {this.state.numOfLaptops > 0 ? <button onClick={this.buyLaptops} className="btn btn-outline-dark">Buy</button> : ""}
                    </div>
                </div>
            </div >
        );
    }

}

export default Shop;