import React, { Component } from 'react'

export default class HotelCard extends Component {
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={this.props.image} className="card-img-top" alt="..." onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "http://via.placeholder.com/300x200"
                }} />
                <div className="card-body">
                    <p className="card-text">{this.props.price}€ - Stars {this.props.star}</p>
                </div>
            </div>
        )
    }
}
