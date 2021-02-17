import React, { Component } from 'react'

export default class ReservationCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adult: 1,
            child: 0
        }
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-success text-light">
                    <b>Réservation</b>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <input className="form-control" type="date"></input>
                        </div>
                        <div className="col">
                            <input className="form-control" type="date"></input>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mt-4">Adulte: <button className="btn btn-outline-danger">-</button> {this.state.adult} <button className="btn btn-outline-success">+</button></p>
                    </div>
                    <div className="row">
                        <p className="mt-4">Enfant: <button className="btn btn-outline-danger">-</button> {this.state.child} <button className="btn btn-outline-success">+</button></p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-success w-100">Réserver</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
