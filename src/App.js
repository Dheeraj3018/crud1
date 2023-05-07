import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Createuser from './Createuser';
import './css/sb-admin-2.css'
import Dashboard from './Dashboard';
import Edituser from './Edituser';
import Login from './Login';
import Portal from './Portal';
import Users from './Users';
import Userview from './Userview';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/Portal' element={<Portal></Portal>}>
        <Route path='Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='Users' element={<Users></Users>}></Route>
        <Route path='Users/:id' element={<Userview></Userview>}></Route>
        <Route path='Users/Edit/:id' element={<Edituser></Edituser>}></Route>
        <Route path='Create-user' element={<Createuser></Createuser>}></Route>
      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
