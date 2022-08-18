import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/fireBase/login";
import Register from "./components/fireBase/register";
import Reset from "./components/fireBase/reset";
import Dashboard from "./components/fireBase/dashboard";
import { EditSystem } from './components/EditSystem'
import ManagerPage from "./view/ManagerPage";

function App() {
  return (
    <div className="app">
      <EditSystem 
        systemUid={'62f2735c00213822e9e87bb8'}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manager/:id" element={<ManagerPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;



