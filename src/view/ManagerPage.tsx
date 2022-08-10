import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import ShowAllSystems from '../components/ShowAllSystems';

function ManagerPage() {

    return(
        <>
        <Typography variant="h4" component="h2" textAlign={'center'}>
        </Typography>,
        <ShowAllSystems/>
        </>
    )
}
export default ManagerPage;