import React, { useMemo } from 'react';
// useCallback, useState, useRef,
import { GoogleMap } from '@react-google-maps/api';
// , Marker, DirectionsRenderer, Circle, MarkerClusterer
// type gml = google.maps.LatLngLiteral;
// type gmd = google.maps.DirectionsResult;
// type gmm = google.maps.MapOptions;
import '../style/map.css';
import Marker from './Marker';
import { TryTwoTone } from '@mui/icons-material';

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
            <Marker
                lat={center.lat}
                lng={center.lng}
                name="My Marker"
                color="red"
            />
            </GoogleMap>
        </div>
    )
}

