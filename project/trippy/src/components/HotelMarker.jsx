import { Marker, Popup } from 'react-leaflet'


function HotelMarker(props) {
    return (
        // <Marker position={[props.lat, props.lon]}>
        //     <Popup>
        //         <b>{props.title}</b> <br /> {props.desc}
        //     </Popup>
        // </Marker>
      <div style={{
        height: '27px',
        backgroundColor: '#fff', 
        width: '60px', 
        textAlign: 'center', 
        border: '2px solid green',
        padding: '3px'
        }}>{props.price}€</div>
    );
}

export default HotelMarker;