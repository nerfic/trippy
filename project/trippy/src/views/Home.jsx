import React, { Component } from 'react'
import getHomeData from "../utils/Api.js"
import CityCard from "../components/CityCard"
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
            img: "http://localhost:3002"
        }
    }

    componentDidMount() {
        getHomeData()
            .then(response => {
                this.setState({
                    cities: response.cities
                })
            })
    }

    render() {
        return (
            <>
            <div>
                <h1 className="title text-center">Découvrir le monde</h1>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center" >
                        {this.state.cities.length > 0 &&
                            this.state.cities.map((city, index) => {
                                return (
                                        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center " >
                                            <Link to={"hotels/" + city.slug}>
                                                <CityCard key={index}
                                                    cities={city.name}
                                                    image={this.state.img + city.source}
                                                />
                                            </Link>
                                        </div>
                                )
                            })
                        }
                    </div>
                </div>
                {this.state.cities.length === 0 &&
                    <p>Il n'y a rien dans l'array</p>
                }
            </div>
            </>
        )
    }
}

