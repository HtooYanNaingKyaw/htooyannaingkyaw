import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'

class Map extends React.Component {

    render() {
        return (
            <div>
                <GoogleMap 
                    defaultZoom={18} 
                    defaultCenter={{ lat: 16.830640, lng: 96.124132 }}
                >
                    <Marker position={{lat: 16.830640, lng: 96.124132}} />
                </GoogleMap>
            </div>
        )
    }
}

export default Map
// exports.WrappedMap = withScriptjs(withGoogleMap(Map))

// export default function Discover (props) {
//     return (
//         <div style={{ width: '100%', height: '100vh', marginBottom: "0" }}>
//             <WrappedMap 
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${'AIzaSyD2AL_TgX3TiMgeMgetrMiPFlsAeXk-khM'}`} 
//                 loadingElement={<div style={{height: '100%'}} />}
//                 containerElement={<div style={{height: '100%'}} />}
//                 mapElement={<div style={{height: '100%'}} />}
//             />
//         </div>
//     )   
// }