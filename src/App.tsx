import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/fireBase/login";
import Register from "./components/fireBase/register";
import Reset from "./components/fireBase/reset";
import Dashboard from "./components/fireBase/dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
//   interface user{
//     name: string;
//     age: number;
//     phone: string;
//   }
//   const [users, setUsers] = useState<user[]>([]);
//   useEffect(() => {
//     const fetch = async () => {
//         try {
//             const res = await axios.get(`http://localhost:3333/user`);
//             setUsers(res.data);
//         } catch (e) {
//             alert(e);
//         }
//     };
//     fetch();
// }, []);
//   return (
//     <>
//     <div className="App">
//      HELLO OUR USERS
//     </div>
//     {users && 
//     users.map((u) => (
//       <div>
//           <li>{u.name}</li>
//       </div>
//   ))}
//     </>
//   );
 }

export default App;
