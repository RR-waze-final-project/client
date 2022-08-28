/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

// export const Palces = () => {
//   return (
//     <div>palces</div>
//   )
// }

import React, { useRef } from "react";

export const AutoComplete = () => {
    // const autoCompleteRef = useRef<any>();
    const inputRef = useRef<any>();
    // const options = {
    //     componentRestrictions: { country: "ng" },
    //     fields: ["address_components", "geometry", "icon", "name"],
    //     types: ["establishment"]
    // };

    // useEffect(() => {
    //     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    //         inputRef.current,
    //         options
    //     );
    // }, []);
    // debugger

    const autocomplete =
        new window.google.maps.places.AutocompleteService();

    autocomplete.getPlacePredictions(
        { input: "Samberstraat" },
        predictions => {
            // Predictions for "Samberstraat"
        }
    );

    return (
        <div>
            <label>enter address :</label>
            <input ref={inputRef} />
        </div>
    );
};
