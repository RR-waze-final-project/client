import React, { useEffect, useState } from 'react'
import { useLoadScript } from '@react-google-maps/api';
import { SystemHeader } from './systemHeader';
import { Map } from './map';
import { Box } from '@mui/material';
import { AutoComplete } from './autoComplete';

export const SystemHome = () => {
  const [center, setCenter] = useState<{lat: number, lng: number}>();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAHIBsiBnJUSoL2yBVqvv3FdN2p2em-MUI',
    libraries: ['places']
  })

  useEffect(() => {
    const currentLocation = async () => {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    try{
    navigator.geolocation.getCurrentPosition(function(position) {
      setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }
   catch(err :any) {
      console.error("Error Code = " + err.code + " - " + err.message);
  }
  }
  currentLocation();
   },[])


  if (!isLoaded) {
    return <div>loading...</div>
  };


  return ( 
    <>
    {center &&
    <>
      <Box sx={{ textAlign: 'center' }}>
        <SystemHeader />
      </Box>
      <Box sx={{ width: '100%', display: 'flex' }}>
        <Box sx={{ width: '80%' }}>
          <Map center={center}/>
        </Box>
        <Box sx={{ width: '20%', direction: 'rtl' }}>
          <AutoComplete setCenter={setCenter} />
        </Box>
      </Box>
    </>
  }
  </>
  )
}

