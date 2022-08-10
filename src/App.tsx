import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fire from './Fire'
import './App.css';

function App() {
  interface user {
    name: string;
    age: number;
    phone: string;
  }
  const [users, setUsers] = useState<user[]>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:3333/user`);
        console.log(res.data);
        setUsers(res.data);
      } catch (e) {
        alert(e);
      }
    };
    fetch();
  }, []);
  fire.auth().onAuthStateChange((user: any) => console.log(user));

  return (
    <>
      <div className="App">
        HELLO OUR USERS
      </div>
      {users &&
        users.map((u, index) => (
          <div>
            <li key={index}>{u.name}</li>
          </div>
        ))}
    </>
  );
}

export default App;



