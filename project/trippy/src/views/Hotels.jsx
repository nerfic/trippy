import React, { Component } from 'react'
import HotelCard from "../components/HotelCard"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import HotelMap from "../components/HotelMap"

export default class Hotels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "",
            coords: {
                lat: 0,
                lon: 0
            }
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

        // console.log("coords hotel", this.state.city.location.lat)
    }

    render() {
        console.log(this.state.coords)
        let newLat = this.state.coords.lat
        let newLon = this.state.coords.lon
        console.log("lat =", newLat)
        console.log("lon =", newLon)
        return (
            <div >
                <div >
                    <div >
                        {this.state.city.length > 0 &&
                            <div>

                                <div className="container-fluid ">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-6  ">
                                            <div className="container  ">
                                                <div className="row d-flex justify-content-around">
                                                    {this.state.city.map((hotel, index) => {
                                                        return (
                                                            <HotelCard
                                                                link={hotel._id}
                                                                name={hotel.name}
                                                                image={"http://localhost:3000" + hotel.pictures[0]}
                                                                price={hotel.price}
                                                                star={hotel.stars}
                                                                phone ={hotel.phone}
                                                            />
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6  justify-content-center   ">
                                            <HotelMap

                                                cityLatitude={newLat}
                                                cityLongitude={newLon}
                                                hotels={this.state.city}

                                            />
                                           
                                            </div>
                                        </div>
                                    </div>

                                </div>
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