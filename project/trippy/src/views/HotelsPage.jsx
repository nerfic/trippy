import React, { Component } from 'react'
import HotelGallery from "../components/HotelGallery"
import ReservationCard from "../components/ReservationCard"
import HotelInfoCard from "../components/HotelInfoCard"
import CommodotiesCard from "../components/CommodotiesCard"
import "react-image-gallery/styles/css/image-gallery.css";

export default class HotelsPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hotel: "",
            commodities: [],
            coords: {
                lat: 48,
                lon: 0
            },
            image: [
                {
                    original: 'https://picsum.photos/id/1018/1000/600/',
                    thumbnail: 'https://picsum.photos/id/1018/1000/600/',
                }
            ],
            newPrice: 0
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3002/api/hotels/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    hotel: response.result,
                    commodities: response.result.commodities,
                    coords: response.result.location,
                    newPrice: response.result.price,
                    image: response.result.pictures.map((image) => {
                        return (
                            {
                                original: image,
                                thumbnail: image
                            }
                        )
                    })
                })
            })
    }

    // calcultePrice = () => {}

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <HotelGallery images={this.state.image}></HotelGallery>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <HotelInfoCard
                            title={this.state.hotel.name}
                            address={this.state.hotel.address}
                            price={this.state.hotel.price}
                            stars={this.state.hotel.stars}
                            lat={this.state.coords.lat}
                            lon={this.state.coords.lon}
                        />
                        <CommodotiesCard
                            commodities={this.state.commodities}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <ReservationCard 
                            price={this.state.hotel.price}
                        />
                    </div>
                </div>
            </div>
        )
    }
}