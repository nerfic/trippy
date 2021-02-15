import React, { Component } from 'react'
import getHomeData from "../utils/Api.js"
import CityCard from "../components/CityCard"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        getHomeData()
            .then(response => {
                this.setState({
                    cities: response
                })
                console.log("cities", this.state.cities)
            })
    }

    render() {
        return (
            <div>
                <h1>Découvrir le monde</h1>
                {this.state.cities.length > 0 &&
                    this.state.cities.map((cities) => {
                        return (
                            <CityCard cities={this.state} ></CityCard>
                        )
                    })
                }
                {this.state.cities.length === 0 &&
                    <p>Il n'y a rien dans l'array</p>
                }
            </div>
        )
    }
}