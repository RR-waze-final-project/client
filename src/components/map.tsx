import React, { useMemo, useState } from 'react';
// useCallback, useState, useRef,
import { GoogleMap } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
// , Marker, DirectionsRenderer, Circle, MarkerClusterer
// type gml = google.maps.LatLngLiteral;
// type gmd = google.maps.DirectionsResult;
// type gmm = google.maps.MapOptions;
import '../style/map.css';
import Marker from './Marker';


interface props {
  center: { lat: number, lng: number };

}
export const Map = ({ center }: props) => {

    // const getMapOptions = (maps: any) => {
    //     return {
    //       disableDefaultUI: true,
    //       mapTypeControl: true,
    //       streetViewControl: true,
    //       styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    //     };
    //   };

    // const center = useMemo(() => ({
    //     lat: 31.75,
    //     lng: 35.2
    // }), []);

    // return (
    //     <div>
    //         <GoogleMap
    //             zoom={12}
    //             center={center}
    //             mapContainerClassName='map-container'
    //             options={getMapOptions}
    //         >
    //         <Marker
    //             lat={11.0168}
    //             lng={76.9558}
    //             name="My Marker"
    //             color="blue"
    //         />
    //         </GoogleMap>
    //     </div>
    // )
    const getMapOptions = (maps: any) => {
        return {
          disableDefaultUI: true,
          mapTypeControl: true,
          streetViewControl: true,
          styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
      };
    
        const [zoom, setZoom] = useState(11);
        return (
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'replace your api key' }}
              defaultCenter={center}
              defaultZoom={zoom}
              options={getMapOptions}
            >
              <Marker
                lat={center.lat}
                lng={center.lng}
                name="My Marker"
                color="red"
              />
            </GoogleMapReact>
          </div>
        );
}


