import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './config/firebase';
import routes from './config/routes';
import userStore from './store/UserStore';
import './App.css';

export interface IApplicationProps { }

const App: React.FunctionComponent<IApplicationProps> = props => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged ( async user => {
      if (user) {
        await userStore.getUserById();
        console.log(userStore.user);
      } else {
        console.log('No user detected');
      }
      setLoading(false);
    })
  }, []);

  if (loading)
    return <div>Loading...</div>

  return (
    <Router>
      <Routes>
        {routes.map((route, index) =>
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />)}
      </Routes>
    </Router>
  );
}

export default App;