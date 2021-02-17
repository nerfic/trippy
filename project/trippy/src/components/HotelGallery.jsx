import React from "react"
import ImageGallery from 'react-image-gallery';

class HotelGallery extends React.Component {
    render() {
        return <ImageGallery items={this.props.images} />;
    }
}

export default HotelGallery;