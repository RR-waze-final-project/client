/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import swal from 'sweetalert';

interface props {
    adminUid: string;
    setOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddSystem = ({ adminUid, setOpenAdd }: props) => {

    const inputTopic = useRef<HTMLInputElement>();
    const inputName = useRef<HTMLInputElement>();
    const inputUrl = useRef<HTMLInputElement>();
    const inputObjectName = useRef<HTMLInputElement>();
    const inputDescription = useRef<HTMLInputElement>();
    const inputEmail = useRef<HTMLInputElement>();
    const inputPhone = useRef<HTMLInputElement>();

    const handleCloseAndSave = async () => {
        close();
        const systemToSave = {
          topic: inputTopic.current?.value,
          urlName: inputName.current?.value,
          urlImg: inputUrl.current?.value,
          objectName: inputObjectName.current?.value,
          adminUid: adminUid,
          description: inputDescription.current?.value,
          communicationDetails: {
            email: inputEmail.current?.value,
            phone: inputPhone.current?.value,
          }
        }
        console.log(systemToSave);
        try {
          await axios.post(`http://localhost:3333/system`, systemToSave)
          swal({
            title: "Saved!",
            text: "your details update",
            icon: "success",
            button: "ok!",
          } as any);
        } catch (err) {
          console.log(err);
        }
      };

    const close = () => setOpenAdd(false);

    return (
        <Dialog
            open={true}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Add your system details"}
            </DialogTitle>
            <DialogContent >
                <DialogContentText id="alert-dialog-description">
                    <TextField id="outlined-basic" inputRef={inputTopic} label="Topic" variant="outlined" sx={{ margin: '3%' }} />
                    <TextField id="outlined-basic" inputRef={inputName} label="Name" variant="outlined" sx={{ margin: '3%' }} />
                    <TextField id="outlined-basic" inputRef={inputUrl} label="Url image" variant="outlined" sx={{ margin: '3%' }} />
                    <TextField id="outlined-basic" inputRef={inputObjectName} label="Object name" variant="outlined" sx={{ margin: '3%' }} />
                    <TextField id="outlined-basic" inputRef={inputDescription} label="Description" variant="outlined" sx={{ margin: '3%' }} />
                    <TextField id="outlined-basic" inputRef={inputEmail} label="Email system" variant="outlined" sx={{ margin: '3%' }} />
                    <TextField id="outlined-basic" inputRef={inputPhone} label="Phone system" variant="outlined" sx={{ margin: '3%' }} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={handleCloseAndSave} autoFocus>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

