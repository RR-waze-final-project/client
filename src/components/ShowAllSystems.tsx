/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import { useEffect, useState } from 'react';
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
// import { async } from '@firebase/util';
// import { idText } from 'typescript';
import { useNavigate } from 'react-router-dom';
import { EditSystem } from './editSystem';

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
​
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

  const linkedToSystemPage = (urlName: string) => {
    console.log(`${urlName} - navigate to system`);
    debugger
    const navigate = useNavigate();
    return navigate(`/${urlName}`);
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" component="h2" textAlign={'center'}>
          All MY SYSTEMS
        </Typography>
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

