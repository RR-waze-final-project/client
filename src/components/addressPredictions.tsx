import React, { useState } from "react";
import useAddressPredictions from "./useAddressPredictions";

export default function AddressPredictions() {
  const [input, setInput] = useState("");

  const predictions = useAddressPredictions(input);

  return (
    <div>
      <input
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <ul>
        {predictions.map((prediction, index) => (
          <li key={index}>{prediction}</li>
        ))}
      </ul>
    </div>
  );
}