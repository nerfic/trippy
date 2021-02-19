import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StarsRating from "stars-rating"

export default class HotelCard extends Component {
    render() {
        return (
            /*
            <div className="card cardMargin" style={{ width: "16rem", marginTop: "30px" }}>
                <img src={this.props.image} className="card-img-top" alt="..." onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "http://via.placeholder.com/300x200"
                }} />
                <div className="card-body">
                    <Link to={"../hotel/" + this.props.link}>{this.props.name}</Link>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">{this.props.price}€</p>
                        <p> <StarsRating
                            count={5}
                            value={this.props.star}
                            size={24}
                            edit={false}
                            color2={'#ffd700'} />
                        </p>
                    </div>
                    {this.props.star === null &&
                        <p>Aucune note</p>}
                </div>
            </div>
            */

            <div className="card mb-3" style={{ width: "100%", marginTop: "30px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={this.props.image} style={{ width: "100%", height: "100%" }} alt="..." onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "http://via.placeholder.com/300x200"
                        }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body ">
                            <Link to={"../hotel/" + this.props.link}>{this.props.name}</Link>
                            <p className="card-text">{this.props.price}€</p>
                            <i class="fas fa-phone"></i><a href={"tel:" + this.props.phone}> {this.props.phone}</a>
                            <p><i class="fas fa-map-marker"></i> {this.props.address}</p>
                        </div>
                        <div className="card-footer">
                            {/* <StarsRating
                                style={{ textAlign: "center" }}
                                count={5}
                                value={this.props.star}
                                size={24}
                                edit={false}
                                color2={'#ffd700'} />

                            {this.props.star === null &&
                                <p>Aucune note</p>} */}
                            {this.props.star != null &&
                                <StarsRating
                                    style={{ textAlign: "center" }}
                                    count={5}
                                    value={this.props.star}
                                    size={24}
                                    edit={false}
                                    color2={'#ffd700'} />
                            } {this.props.star === null &&
                                <p>Aucune note</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
