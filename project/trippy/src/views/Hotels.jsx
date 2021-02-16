import React, { Component } from 'react'
import HotelCard from "../components/HotelCard"

export default class Hotels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // params: this.props.match.params.id,
            city: "",
            coords: ""
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3002/api/hotels/city/${this.props.match.params.city}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    city: response.results,
                    coords: response.center
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {this.state.city.length > 0 &&
                            this.state.city.map((hotel, index) => {
                                return (
                                    <HotelCard
                                        image={"http://localhost:3000" + hotel.pictures[0]}
                                        price={hotel.price}
                                        star={hotel.stars}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {this.state.city.length === 0 &&
                    <p>Aucun hotel disponible</p>
                }
            </div>
        )
    }
}