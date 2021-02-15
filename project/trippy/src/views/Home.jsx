import React, { Component } from 'react'
import getHomeData from "../utils/Api.js"

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        getHomeData()
    }

    render() {
        return (
            <div>
                <h1>Découvrir le monde</h1>
                {this.state.cities.length > 0 &&
                    <p>il y a quelque chose dans l'array</p>
                }
                {this.state.cities.length === 0 &&
                    <p>Il n'y a rien dans l'array</p>
                }
            </div>
        )
    }
}