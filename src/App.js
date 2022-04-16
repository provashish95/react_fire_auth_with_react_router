
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Navbar from './component/Navbar/Navbar';
import Users from './component/Users/Users';
import UsersInfo from './component/UsersInfo/UsersInfo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/user/:userId' element={<UsersInfo></UsersInfo>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
