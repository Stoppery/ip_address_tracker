import {React, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet';

import customIcon from '../../style/img/icon-location.svg';


const myIcon = L.icon({
    iconUrl: customIcon,
    iconSize: [46, 56]
});

const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng]);
        map.attributionControl.setPrefix(false);
        map.removeControl(map.zoomControl);
    }, [lat, lng, map]);
    return null;
}

function Map({dataApi}) {
    const [lat, long] = [dataApi.location.lat || 38.736946 ,dataApi.location.lng || -9.142685];


    return(
        <MapContainer style={{height: '71vh'}} center={[lat, long]} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
                icon={myIcon}
                position={[lat, long]}
            />

            <RecenterAutomatically lat={lat} lng={long} />
        </MapContainer>
    )
}

export default Map;