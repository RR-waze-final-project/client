import React, { useMemo } from 'react';
// useCallback, useState, useRef,
import { GoogleMap } from '@react-google-maps/api';
// , Marker, DirectionsRenderer, Circle, MarkerClusterer
// type gml = google.maps.LatLngLiteral;
// type gmd = google.maps.DirectionsResult;
// type gmm = google.maps.MapOptions;
import '../style/map.css';

export const Map = () => {

    const center = useMemo(() => ({
        lat: 31.75,
        lng: 35.2
    }), []);

    return (
        <div>
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName='map-container'
            ></GoogleMap>
        </div>
    )
}

