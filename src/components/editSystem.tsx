/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import swal from 'sweetalert';
import { System } from '../utils/System';

interface props {
    systemUid: string;
    setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditSystem = ({ systemUid, setOpenEdit }: props) => {

    const [system, setSystem] = useState<System | null>(null);

    const inputTopic = useRef<HTMLInputElement>();
    const inputName = useRef<HTMLInputElement>();
    const inputUrl = useRef<HTMLInputElement>();
    const inputObjectName = useRef<HTMLInputElement>();
    const inputDescription = useRef<HTMLInputElement>();
    const inputEmail = useRef<HTMLInputElement>();
    const inputPhone = useRef<HTMLInputElement>();

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:3333/system/${systemUid}`);
                console.log(res.data);
                setSystem(res.data);
            } catch (error: any) {
                alert(error.message);
            }
        };
        fetch();
    }, []);

    const editSystem = async () => {
        const systemToSave = {
            topic: inputTopic.current?.value,
            urlName: inputName.current?.value,
            urlImg: inputUrl.current?.value,
            objectName: inputObjectName.current?.value,
            adminUid: system?.adminUid,
            description: inputDescription.current?.value,
            communicationDetails: {
                email: inputEmail.current?.value,
                phone: inputPhone.current?.value,
            }
        }
        try {
            await axios.put(`http://localhost:3333/system/${systemUid}`, systemToSave)
            await swal({
                title: "Saved!",
                text: "your details update",
                icon: "success",
                button: "ok!",
            } as any);
            close();
        } catch (err) {
            console.log(err);
        }
    };

    const close = () => setOpenEdit(false);

    return (
        <Dialog
            open={system != null}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add your system details to update"}
            </DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-description">
                    <TextField id="filled-password-input"
                        inputRef={inputTopic}
                        defaultValue={system?.topic}
                        variant="filled"
                        required sx={{ margin: '3%' }}
                    /> <br />
                    <TextField id="outlined-basic"
                        inputRef={inputUrl}
                        defaultValue={system?.urlName}
                        variant="filled"
                        required sx={{ margin: '3%' }}
                    /><br />
                    <TextField id="outlined-basic"
                        inputRef={inputUrl}
                        defaultValue={system?.urlImg}
                        variant="filled"
                        required sx={{ margin: '3%' }}
                    /><br />
                    <TextField id="outlined-basic"
                        inputRef={inputObjectName}
                        defaultValue={system?.objectName}
                        variant="filled"
                        required sx={{ margin: '3%' }}
                    /><br />
                    <TextField id="outlined-basic"
                        inputRef={inputDescription}
                        defaultValue={system?.description}
                        // multiline
                        rows={2}
                        variant="filled"
                        required sx={{ margin: '3%'}}
                    /><br />
                    <TextField id="outlined-basic"
                        inputRef={inputEmail}
                        defaultValue={system?.communicationDetails.email || ''}
                        variant="filled"
                        sx={{ margin: '3%' }}
                    /><br />
                    <TextField id="outlined-basic"
                        inputRef={inputPhone}
                        defaultValue={system?.communicationDetails.phone || ''}
                        variant="filled"
                        sx={{ margin: '3%' }}
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}> Cancel </Button>
                <Button onClick={editSystem} autoFocus> Save </Button>
            </DialogActions>
        </Dialog>
    )
}