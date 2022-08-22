import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/fireBase/login';
import Register from './components/fireBase/register';
import Reset from './components/fireBase/reset';
import Dashboard from './components/fireBase/dashboard';
import ManagerPage from './view/ManagerPage';
import { SystemHome } from './components/systemHome';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/ManagerPage' element={<ManagerPage />} />
          <Route path='/:systemUrl' element={<SystemHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



