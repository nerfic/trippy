import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StarsRating from "stars-rating"

export default class HotelCard extends Component {
    render() {
        return (
            <div className="card cardMargin" style={{ width: "16rem", marginTop: "30px" }}>
                <img src={this.props.image} className="card-img-top" alt="..." onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "http://via.placeholder.com/300x200"
                }} />
                <div className="card-body">
                    <Link to={"../hotel/" + this.props.link}>{this.props.name}</Link>
                    <p className="card-text">{this.props.price}€</p>
                    <p> <StarsRating
                        count={5}
                        value={this.props.star}
                        size={24}
                        edit={false}
                        color2={'#ffd700'} />
                    </p>
                    {this.props.star === null &&
                        <p>Aucune note</p>}
                </div>
            </div>
        )
    }
}
