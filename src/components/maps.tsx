import React from 'react'
import { useLoadScript } from '@react-google-maps/api';
import { Map } from './map';
import { AutoComplete } from './autoComplete';
// process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
export const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyADGRXFAQJjRYgjE_UBoOpTp1XWFlpqBu0',
    libraries: ['places']
  })

  if (!isLoaded) {
    return <div>loading...</div>
  }

  return (
    <div>
      <Map />
      <AutoComplete />
    </div>
  )
}

