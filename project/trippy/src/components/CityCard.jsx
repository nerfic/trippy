import React, { Component } from 'react'

export default class CityCard extends Component {
    render() {
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{this.props.cities}</p>
                    </div>
                </div>
            </>
        )
    }
}