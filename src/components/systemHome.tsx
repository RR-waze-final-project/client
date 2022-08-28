import React from 'react'
import { SystemHeader } from './systemHeader';
import { Maps } from './maps';
import { Box } from '@mui/material';
import { SearchHeader } from './searchHeader';
import { AutoComplete } from './autoComplete';

export const SystemHome = () => {

  return (
    <div>
      <Box sx={{textAlign: 'center'}}>
        <SystemHeader />
      </Box>
      <Box sx={{width: '100%', display: 'flex'}}>
        <Box sx={{width: '80%'}}>
          <Maps />
        </Box>
        <Box sx={{width: '20%', direction: 'rtl'}}>
          <AutoComplete />
        </Box>
      </Box>
    </div>
  )
}

