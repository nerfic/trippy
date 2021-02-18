import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import HotelMarker from "./HotelMarker"



export default class HotelMap extends Component {
    render() {
        return (
            <>
            <div className="stickyMap position-sticky" style={{ height: "35%", width: "100%" }}>
            
                <Map center={[this.props.cityLatitude, this.props.cityLongitude]} zoom={12} scrollWheelZoom={false} style={{ height: "50%" }}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.props.hotels.map((hotel, index) => {
                        return (
                            <HotelMarker
                                title={hotel.name}
                                desc={hotel.address}
                                lat={hotel.location.lat}
                                lon={hotel.location.lon}
                            />
                        )
                    })
                    }
                </Map>
                
            </div>
            
            </>
        )
    }
}
