import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import HotelMarker from "./HotelMarker"
import L from "leaflet";
import ReactDOMServer from "react-dom/server"



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
                        const icon = L.divIcon({
                            html: ReactDOMServer.renderToString(<HotelMarker price={hotel.price} />),
                            });
                        return (
                            <Marker
                                title={hotel.name}
                                desc={hotel.address}
                                lat={hotel.location.lat}
                                lon={hotel.location.lon}
                                icon={icon}
                                position={[hotel.location.lat, hotel.location.lon]}
                            >
                                <Popup>
                                    <b>{hotel.name}</b> <br /> {hotel.address}
                                </Popup>
                            </Marker>
                        )
                    })
                    }
                </Map>
                
            </div>
            
            </>
        )
    }
}
