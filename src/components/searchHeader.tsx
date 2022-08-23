/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface System {
    _id: any;
    topic: string;
    urlName: string;
    urlImg: string;
    objectName: string;
    adminUid: any;
    description: string;
    communicationDetails: { email: string, phone: string };
}

export const SearchHeader = () => {

    const { systemUrl } = useParams();
    const [system, setSystem] = useState<System | null>(null);

    useEffect(() => {
        const getSystemByUrlName = async () => {
            try {
                const res = await axios.get(`http://localhost:3333/system/urlName/${systemUrl}`);
                setSystem(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        getSystemByUrlName();
    }, [])
    
    return (
        <div>{system &&
            <>
                <h1>{system.topic}</h1>
                <h4>{system.description}</h4>
            </>
        }</div>
    )
}

