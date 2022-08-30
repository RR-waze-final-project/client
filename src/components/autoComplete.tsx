
import { useRef, useEffect } from "react";

interface props {
    setCenter: React.Dispatch<React.SetStateAction<{lat: number, lng: number}>>;
}

export const AutoComplete = ( { setCenter }: props) => {

    const autoCompleteRef = useRef<google.maps.places.Autocomplete>();
    const inputRef = useRef<any>();

    const options = {
        componentRestrictions: { country: "ng" },
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["establishment"]
    };

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
            inputRef.current,
            // options
        );

        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current?.getPlace();
            const center = await place?.geometry?.viewport?.getCenter();
            const lat = center?.lat() || 0;
            const lng = center?.lng() || 0;
            setCenter({ lat: lat, lng: lng });
        });
        
    }, []);

    return (
        <div>
            <label>enter address :</label><br />
            <input ref={inputRef} />
        </div>
    );
};
