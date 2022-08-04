import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  interface user{
    name: string;
    age: number;
    phone: string;
  }
  const [users, setUsers] = useState<user[]>([]);
  useEffect(() => {
    const fetch = async () => {
        try {
            const res = await axios.get(`http://localhost:3333/user`);
            setUsers(res.data);
        } catch (e) {
            alert(e);
        }
    };
    fetch();
}, []);
  return (
    <>
    <div className="App">
     HELLO OUR USERS
    </div>
    {users && 
    users.map((u) => (
      <div>
          <li>{u.name}</li>
      </div>
  ))}
    </>
  );
}

export default App;
