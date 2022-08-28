// import { useEffect, useRef, useState } from "react";

// export default function useAddressPredictions(input: string) {
//     const [predictions, setPredictions] = useState<any[]>([]);

//     const autocomplete = useRef<google.maps.places.AutocompleteService>();

//     if (!autocomplete.current) {
//         autocomplete.current =
//             new window.google.maps.places.AutocompleteService();
//     }

//     const getPlacePredictions = (input: string) => {
//         autocomplete.current?.getPlacePredictions(
//             { input },
//             (predictions) => {
//                 setPredictions(
//                     predictions.map(prediction => prediction.description)
//                 );
//             }
//         );
//     }

//     useEffect(() => {
//         getPlacePredictions(input);
//     }, [input]);

//     return predictions;
// }

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash';


export const UseAddressPredictions = (input: google.maps.places.AutocompletionRequest) => {

    const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);

    const autocomplete = useRef<google.maps.places.AutocompleteService>();

    if (!autocomplete.current) {
        autocomplete.current =
          new window.google.maps.places.AutocompleteService();
      }

      const getPlacePredictions = (input: string) => {
        autocomplete.current?.getPlacePredictions(
          { input },
          predictions => {
            setPredictions(
              predictions?.map(prediction => prediction.description)
            );
          }
        );
      }

    return (
        <div>useAddressPredictions</div>
    )
}

