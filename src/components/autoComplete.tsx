/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

// export const Palces = () => {
//   return (
//     <div>palces</div>
//   )
// }

import { useRef, useEffect } from "react";
// import "./styles.css";

export const AutoComplete = () => {
    const autoCompleteRef = useRef<any>();
    const inputRef = useRef<any>();
    const options = {
        componentRestrictions: { country: "ng" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"]
    };

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            options
        );
    }, []);
    
    return (
        <div>
            <label>enter address :</label>
            <input ref={inputRef} />
        </div>
    );
};
