import * as React from 'react';
import {useEffect, useState, useRef } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import swal from 'sweetalert';
import { async } from '@firebase/util';
import { idText } from 'typescript';
import { useNavigate } from 'react-router-dom';
import { System } from '../utils/System';
import systemStore from '../store/SystemStore'
import userStore from '../store/userStore';


function ShowAllSystems() {
    const maxOfSystems: number = 4;
    const [systems, setSystems] = useState<System[]>([]);
    const [open, setOpen] = React.useState<boolean>(false);
    const [openEdit, setOpenEdit] = React.useState<boolean>(false);
    const inputTopic = useRef<HTMLInputElement>();
    const inputName = useRef<HTMLInputElement>();
    const inputUrl = useRef<HTMLInputElement>();
    const inputObjectName = useRef<HTMLInputElement>();
    const inputDescription = useRef<HTMLInputElement>();
    const inputEmail = useRef<HTMLInputElement>();
    const inputPhone = useRef<HTMLInputElement>();
    const navigate = useNavigate();


    const handleClickOpen = () => {
    if(systems.length === maxOfSystems)swal("You cannot add a new system" ,"you have reached the maximum possible amount of systems")
    else setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpenEdit = () => {
        setOpenEdit(true);
      };
      const handleCloseEdit = () => {
        setOpenEdit(false);
      };
    const handleCloseAndSave = async() => {
        setOpen(false);
        const systemToSave = {
            fireBaseUId:userStore.user?.fireBaseUId,
            topic : inputTopic.current?.value,
            urlName : inputName.current?.value,
            urlImg : inputUrl.current?.value,
            objectName : inputObjectName.current?.value,
            adminUid : userStore,
            description : inputDescription.current?.value,
            communicationDetails:{
                email : inputEmail.current?.value,
                phone : inputPhone.current?.value,
            }
        }
        console.log(systemToSave);
        try {
            await systemStore.addSystem(systemToSave)
                   swal({
                       title: "Saved!",
                       text: "your details update",
                       icon: "success",
                       button: "ok!",
                   }as any);
        }catch (err) {
            console.log(err);
        }
      };
      const editSystem = async(systemId: any) => { 
        setOpenEdit(false);
        const systemToSave = {
            topic : inputTopic.current?.value,
            urlName : inputName.current?.value,
            urlImg : inputUrl.current?.value,
            objectName : inputObjectName.current?.value,
            adminUid : id,
            description : inputDescription.current?.value,
            communicationDetails:{
                email : inputEmail.current?.value,
                phone : inputPhone.current?.value,
            }
        }
        console.log(systemToSave);
        try {
            await axios.put(`http://localhost:3333/system/${systemId}`, systemToSave)
                   swal({
                       title: "Saved!",
                       text: "your details update",
                       icon: "success",
                       button: "ok!",
                   }as any);
        }catch (err) {
            console.log(err);
        }
      };


    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:3333/system/specificSystems/${id}`);
                setSystems(res.data);
            } catch (error: any) {
                alert(error.message);
            }
        };
        fetch();
    }, [systems]);
    function deleteSystem(id:any):void{
        const fetch = async () => {
            try {
                const willDelete = await swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this system!",
                    buttons: ["cancel", "ok"],
                });
                if (willDelete) {
                    await axios.delete(`http://localhost:3333/system/${id}`);
                    swal("Deleted!", "Your system has been deleted.", "success");
                  };
            } catch (error: any) {
                alert(error.message);
            }
        };
        fetch();
    }
    const logout = () =>{
        navigate('/dashboard')
    }
    return (
        <>
        <Box sx={{ width: '100%'}}>
        <Typography variant="h4" component="h2" textAlign={'center'}>
            All MY SYSTEMS
        </Typography>
        <Button className="dashboard__btn" onClick={logout}>
          Logout
         </Button>
        {systems && systems.map((systemCard: System) =>            
            <Card key={systemCard._id} sx={{ width: '210px' , float: 'left', marginLeft: '5%', marginTop: '5%' , }}>
                <CardMedia
                    width="350px"
                    component="img"
                    height="140"
                    image={systemCard.urlImg} 
                    alt="green iguana" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {systemCard.objectName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {systemCard.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small" onClick={handleClickOpenEdit}>edit</Button>
                        <Dialog
                          open={openEdit}
                          onClose={handleCloseEdit}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                              {"Add your system details to update"}
                            </DialogTitle>
                            <DialogContent >
                              <DialogContentText id="alert-dialog-description">
                              <TextField id="filled-password-input" inputRef={inputTopic} defaultValue={systemCard.topic}  variant="filled" required sx={{margin: '3%'}}/> <br />
                                <TextField id="outlined-basic" inputRef={inputUrl} defaultValue={systemCard.urlName} variant="filled" required sx={{margin: '3%'}}/><br />
                                <TextField id="outlined-basic" inputRef={inputUrl} defaultValue={systemCard.urlImg} variant="filled" required sx={{margin: '3%'}}/><br />
                                <TextField id="outlined-basic" inputRef={inputObjectName}  defaultValue={systemCard.objectName} variant="filled" required sx={{margin: '3%'}}/><br />
                                <TextField id="outlined-basic" inputRef={inputDescription} defaultValue={systemCard.description} variant="filled" required sx={{margin: '3%'}}/><br />
                                <TextField id="outlined-basic" inputRef={inputEmail} defaultValue={systemCard.communicationDetails.email} variant="filled" sx={{margin: '3%'}}/><br />
                                <TextField id="outlined-basic" inputRef={inputPhone} defaultValue={systemCard.communicationDetails.phone} variant="filled" sx={{margin: '3%'}}/>
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleCloseEdit}>Cancel</Button>
                              <Button onClick={() => editSystem( systemCard._id)} autoFocus>
                               Save
                              </Button>
                            </DialogActions>
                        </Dialog>
                    <Button variant="contained" size="small" onClick={() => deleteSystem( systemCard._id)}>delete</Button>
                </CardActions>
            </Card>
        )}
        </Box>
        <Box sx={{ width: '100%', display: 'flex',marginBottom: '0%' }} >
        <Button variant="outlined" onClick={handleClickOpen}>
        Add a new system
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add your system details"}
        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
          <TextField id="outlined-basic" inputRef={inputTopic} label="Topic" variant="outlined" sx={{margin: '3%'}}/>
          <TextField id="outlined-basic" inputRef={inputName} label="Name" variant="outlined" sx={{margin: '3%'}}/>
          <TextField id="outlined-basic" inputRef={inputUrl} label="Url image" variant="outlined" sx={{margin: '3%'}}/>
          <TextField id="outlined-basic" inputRef={inputObjectName} label="Object name" variant="outlined" sx={{margin: '3%'}}/>
          <TextField id="outlined-basic" inputRef={inputDescription} label="Description" variant="outlined"  sx={{margin: '3%'}}/>
          <TextField id="outlined-basic" inputRef={inputEmail} label="Email system" variant="outlined" sx={{margin: '3%'}} />
          <TextField id="outlined-basic" inputRef={inputPhone} label="Phone system" variant="outlined" sx={{margin: '3%'}} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseAndSave} autoFocus>
           Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    </>
        )

}
export default ShowAllSystems;
