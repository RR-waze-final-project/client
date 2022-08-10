import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/fireBase/login";
import Register from "./components/fireBase/register";
import Reset from "./components/fireBase/reset";
import Dashboard from "./components/fireBase/dashboard";
import ManagerPage from "./components/view/ManagerPage";

function App() {
  return (
    <div className="app">
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
