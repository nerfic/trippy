import React, { Component } from 'react'
export default class CityCard extends Component {
    render() {
        return (
            <>
                <div className="card cityCardMargin" style={{ width: "36rem" }}>
                    <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text citiesName">{this.props.cities}</p>
                    </div>
                </div>
            </>
        )
    }
}

