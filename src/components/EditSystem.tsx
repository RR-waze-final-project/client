/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import swal from 'sweetalert';

interface props {
    systemUid: string;
}

interface system {
    uid: string;
    topic: string;
    urlName: string;
    urlImg: string;
    objectName: string;
    adminUid: string;
    description: string;
    communicationDetails: {
        email?: string;
        phone?: string;
    };
}

export const EditSystem: React.FC<props> = ({ systemUid }) => {

    const [system, setSystem] = useState<system>();

    const inputTopic = useRef<HTMLInputElement>(null);
    const inputUrlName = useRef<HTMLInputElement>(null);
    const inputUrlImg = useRef<HTMLInputElement>(null);
    const inputObjectName = useRef<HTMLInputElement>(null);
    const inputDescription = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPhone = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const getSystem = async () => {
            try {
                const res = await axios.get(`http://localhost:3333/system/${systemUid}`);
                setSystem(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err)
            }
        }

        getSystem();
    }, []);
    
    const saveChanges = async () => {
        try {
            if (!inputEmail.current?.value && !inputPhone.current?.value) {
                swal("Cancelled", "You have to fill email eor phone :)", "error");
            }
            else {
                const body = {
                    topic: inputTopic.current?.value,
                    urlName: inputUrlName.current?.value,
                    urlImg: inputUrlImg.current?.value,
                    objectName: inputObjectName.current?.value,
                    adminUid: system?.adminUid,
                    description: inputDescription.current?.value,
                    communicationDetails: {
                        email: inputEmail.current?.value,
                        phone: inputPhone.current?.value,
                    },
                }
                const res = await axios.put(`http://localhost:3333/system/${systemUid}`, body);
                console.log('put system');
                console.log(res.data);
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form
            onSubmit={saveChanges}>
            {system &&
                <>
                    <h1>Edit System</h1>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <>
                                <TextField
                                    id="filled-password-input"
                                    label='topic'
                                    type='text'
                                    defaultValue={system.topic}
                                    inputRef={inputTopic}
                                    variant="filled"
                                    required /> <br />
                                <TextField
                                    id="filled-password-input"
                                    label='urlName'
                                    type='text'
                                    defaultValue={system.urlName}
                                    inputRef={inputUrlName}
                                    variant="filled"
                                    required /><br />
                                <TextField
                                    id="filled-password-input"
                                    label='objectName'
                                    type='text'
                                    defaultValue={system.objectName}
                                    inputRef={inputObjectName}
                                    variant="filled"
                                    required /><br />
                                <TextField
                                    id="filled-multiline-static"
                                    label='description'
                                    multiline
                                    rows={4}
                                    defaultValue={system.description}
                                    inputRef={inputDescription}
                                    variant="filled"
                                    required /><br />
                                <TextField
                                    id="filled-multiline-static"
                                    label='email'
                                    type='text'
                                    defaultValue={system.communicationDetails.email}
                                    inputRef={inputEmail}
                                    variant="filled" /><br />
                                <TextField
                                    id="filled-multiline-static"
                                    label='phone'
                                    type='text'
                                    defaultValue={system.communicationDetails.phone}
                                    inputRef={inputPhone}
                                    variant="filled" />
                            </>
                        </div>
                    </Box>
                    <Button type="submit" variant="outlined" startIcon={<SaveIcon />}>
                        SAVE
                    </Button></>

            }</form>
    )
}

