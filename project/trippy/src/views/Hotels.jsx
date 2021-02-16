import React, { Component } from 'react'
import HotelCard from "../components/HotelCard"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Hotels extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                                        link={hotel._id}
                                        name={hotel.name}
                                        image={"http://localhost:3000" + hotel.pictures[0]}
                                        price={hotel.price}
                                        star={hotel.stars}
                                    />
                                )
                            })
                        }
                        <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "500px" }}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </Map>
                        <p>test</p>
                    </div>
                </div>
                {this.state.city.length === 0 &&
                    <p>Aucun hotel disponible</p>
                }
            </div>
        )
    }
}