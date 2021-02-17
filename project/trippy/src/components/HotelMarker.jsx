import { Marker, Popup } from 'react-leaflet'

function HotelMarker(props) {
    return (
        <Marker position={[props.lat, props.lon]}>
            <Popup>
                <b>{props.title}</b> <br /> {props.desc}
            </Popup>
        </Marker>
    );
}

export default HotelMarker;