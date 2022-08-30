import React, { useState } from 'react'
import { useLoadScript } from '@react-google-maps/api';
import { SystemHeader } from './systemHeader';
import { Map } from './map';
import { Box } from '@mui/material';
import { AutoComplete } from './autoComplete';

export const SystemHome = () => {
  const [center, setCenter] = useState<{ lat: number, lng: number }>({
    lat: 31.75,
    lng: 35.2
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAHIBsiBnJUSoL2yBVqvv3FdN2p2em-MUI',
    libraries: ['places']
  })

  // useEffect(() => {
  //   const currentLocation = async () => {
  //   if ("geolocation" in navigator) {
  //     console.log("Available");
  //   } else {
  //     console.log("Not Available");
  //   }
  //   try{
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
  //   });
  // }
  //  catch(err :any) {
  //     console.error("Error Code = " + err.code + " - " + err.message);
  // }
  // }
  // currentLocation();
  //  },[])


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
      <Box >
        <Box >
          <Map/>
        </Box>
        {/* <Box sx={{ width: '20%', direction: 'rtl' }}>
          <AutoComplete setCenter= {setCenter} />
        </Box> */}
      </Box>
    </>
  }
  </>
  )
}

