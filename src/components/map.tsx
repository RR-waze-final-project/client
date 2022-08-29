import React, { useMemo } from 'react';
// useCallback, useState, useRef,
import { GoogleMap, Marker } from '@react-google-maps/api';
// , Marker, DirectionsRenderer, Circle, MarkerClusterer
// type gml = google.maps.LatLngLiteral;
// type gmd = google.maps.DirectionsResult;
// type gmm = google.maps.MapOptions;
import '../style/map.css';

interface props {
    center: { lat: number, lng: number };
}

export const Map = ({ center }: props) => {

    return (
        <div>
            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName='map-container'
            >
                <Marker position={{ lat: 31.75, lng: 35.2 }} />
            </GoogleMap>
        </div >
    )
}

