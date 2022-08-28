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

  if (!isLoaded) {
    return <div>loading...</div>
  }

  return (
    <div>
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
    </div>
  )
}

