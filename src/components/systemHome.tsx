import React from 'react'
import { SystemHeader } from './systemHeader';
import { Map } from './map';
import { Box } from '@mui/material';
import { AutoComplete } from './autoComplete';
import { useLoadScript } from '@react-google-maps/api';


export const SystemHome = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyADGRXFAQJjRYgjE_UBoOpTp1XWFlpqBu0',
    libraries: ['places']
  })

  if (!isLoaded) {
    return <div>loading...</div>
  }
  return (
    <div>
      <Box sx={{textAlign: 'center'}}>
        <SystemHeader />
      </Box>
      <Box sx={{width: '100%', display: 'flex'}}>
        <Box sx={{width: '80%'}}>
          <Map />
        </Box>
        <Box sx={{width: '20%', direction: 'rtl'}}>
          <AutoComplete />
        </Box>
      </Box>
    </div>
  )
}

