/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditSystem } from './editSystem';
import { AddSystem } from './addSystem';
import { System } from '../utils/System';
import systemStore from '../store/SystemStore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import swal from 'sweetalert';
import '../style/ShowAllSystems.css';


const ShowAllSystems = () => {
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
      await systemStore.getSystemsOfAdmin();
      setSystems(systemStore.systems);
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
    fetch();
  }

  const navigate = useNavigate();

  const logout = () => {
    navigate('/dashboard')
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" component="h2" textAlign={'center'}>
          All MY SYSTEMS
        </Typography>
        <Button className="dashboard__btn" onClick={logout}>
          Logout
        </Button>
        {systems && systems.map((systemCard: System, index: number) =>
          <Card
            key={index}
            sx={{ width: '210px', float: 'left', marginLeft: '5%', marginTop: '5%', }}
          >
            <CardMedia
              className='cardPointer'
              onClick={() => navigate(`/${systemCard.urlName}`)}
              width="350px"
              component="img"
              height="140"
              image={systemCard.urlImg}
              alt="green iguana" />
            <CardContent
              className='cardPointer'
              onClick={() => navigate(`/${systemCard.urlName}`)}
            >
              <Typography gutterBottom variant="h5" component="div">
                {systemCard.objectName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {systemCard.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" onClick={() => {
                setSystemIdTOEdit(systemCard.uid || '0');
                setOpenEdit(true);
              }}>edit</Button>
              <Button variant="contained" size="small" onClick={() => deleteSystem(systemCard.uid)}>delete</Button>
            </CardActions>
          </Card>
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