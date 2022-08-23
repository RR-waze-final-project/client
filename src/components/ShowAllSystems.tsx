/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { EditSystem } from './editSystem';
import { AddSystem } from './addSystem';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import swal from 'sweetalert';
<<<<<<< HEAD
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
=======
// import { async } from '@firebase/util';
// import { idText } from 'typescript';
import { useNavigate } from 'react-router-dom';


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

function ShowAllSystems() {
  const id = '62f36d94a859f1a4aa9a8888';
  const maxOfSystems: number = 4;
  const [systemIdTOEdit, setSystemIdTOEdit] = useState('0');
  const [systems, setSystems] = useState<System[]>([]);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const handleClickOpen = () => {
    if (systems.length === maxOfSystems) swal("You cannot add a new system", "you have reached the maximum possible amount of systems")
    else setOpenAdd(true);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:3333/system/specificSystems/${id}`);
        console.log(res.data);
        setSystems(res.data);
      } catch (error: any) {
        alert(error.message);
      }
>>>>>>> main
    };
    fetch();
  }, [openAdd, openEdit]);

  const deleteSystem = (id: any) => {
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
<<<<<<< HEAD
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
=======
    fetch();
  }
>>>>>>> main

  const linkedToSystemPage = (urlName: string) => {
    console.log(`${urlName} - navigate to system`);
    debugger
    const navigate = useNavigate();
    return navigate(`/${urlName}`);
  }

<<<<<<< HEAD
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
=======
  return (
    <>
      <Box sx={{ width: '100%' }}>
>>>>>>> main
        <Typography variant="h4" component="h2" textAlign={'center'}>
          All MY SYSTEMS
        </Typography>
<<<<<<< HEAD
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
=======
        {systems && systems.map((systemCard: System) =>
          // <button onClick={() => navigate("/ManagerPage");}>
          <Card
            key={systemCard._id}
            sx={{ width: '210px', float: 'left', marginLeft: '5%', marginTop: '5%', }}
            onClick={() => linkedToSystemPage(systemCard.urlName)}
          >
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
              <Button variant="contained" size="small" onClick={() => {
                setSystemIdTOEdit(systemCard._id);
                setOpenEdit(true);
              }}>edit</Button>
              <Button variant="contained" size="small" onClick={() => deleteSystem(systemCard._id)}>delete</Button>
            </CardActions>
          </Card>
          // </button>
>>>>>>> main
        )}
      </Box>
      <Box sx={{ width: '100%', display: 'flex', marginBottom: '0%' }} >
        <Button variant="outlined" onClick={handleClickOpen}>
          Add a new system
        </Button>

      </Box>

      {openEdit && <EditSystem systemUid={systemIdTOEdit} setOpenEdit={setOpenEdit} />}

      {openAdd && <AddSystem adminUid={id} setOpenAdd={setOpenAdd} />}
    </>
  )

}
export default ShowAllSystems;
