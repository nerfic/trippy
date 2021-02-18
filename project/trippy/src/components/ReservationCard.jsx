import React, { Component } from 'react'
import moment, { relativeTimeThreshold } from 'moment';

export default class ReservationCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adult: 1,
            child: 0,
            startDate: moment().format("YYYY-MM-DD"),
            endDate: "",
            invalidDate: false
        }
    }

    addAdult = () => {
        this.setState({
            adult: this.state.adult + 1
        })
    }

    subAdult = () => {
        if (this.state.adult === 1) {
            return
        } else {
            this.setState({
                adult: this.state.adult - 1
            })
        }
    }

    addChild = () => {
        this.setState({
            child: this.state.child + 1
        })
    }

    subChild = () => {
        if (this.state.child === 0) {
            return
        } else {
            this.setState({
                child: this.state.child - 1
            })
        }
    }

    endDate = (event) => {
        this.setState({
            endDate: event.target.value
        })
    }

    calcultePrice = () => {
        let diffDate = Math.floor((moment(this.state.endDate) - moment(this.state.startDate))/ (60 * 60 * 24 * 1000))
        if (diffDate === 0) {
            return this.props.price
        } else if (diffDate < 0) {
            console.log('inf a 0')
            return this.props.price
        } else if (isNaN(moment(this.state.endDate))) {
            return this.props.price
        } else {
            return this.props.price * diffDate;
        }
    }

    invalidDate = () => {
        return (
            <>
            <p>Date invalide</p>
            </>
        )
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
                            <input className="form-control" type="date" value={moment().format("YYYY-MM-DD")}></input>
                        </div>
                        <div className="col">
                            <input className="form-control" type="date" onChange={this.endDate}></input>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mt-4">Adulte: 
                        <button className="btn btn-outline-danger" onClick={this.subAdult}>-</button> 
                        <span className="mx-3">{this.state.adult}</span>
                        <button className="btn btn-outline-success" onClick={this.addAdult}>+</button>
                        </p>
                    </div>
                    <div className="row">
                        <p className="mt-4">Enfant: 
                        <button className="btn btn-outline-danger" onClick={this.subChild}>-</button> 
                        <span className="mx-3">{this.state.child}</span>
                        <button className="btn btn-outline-success" onClick={this.addChild}>+</button>
                        </p>
                        <p></p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-success w-100">Réserver {this.calcultePrice()}0</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
