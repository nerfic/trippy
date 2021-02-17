import React, { Component } from 'react'

export default class CommodotiesCard extends Component {
    render() {
        return (
            <div>
                <div className="card mt-3 mb-3">
                    <div className="card-header bg-success text-light">
                        <b>Services</b>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.props.commodities.length > 0 &&
                                this.props.commodities.map((commodities, index) => {
                                    return (
                                        <div className="col-6">
                                            <p><i className="fas fa-check-square text-success"></i> {commodities}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
