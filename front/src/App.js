import logo from './logo.svg';
import './App.css';
import Header from './pages/header/Header.js'
import Login from './pages/auth/login/Login.js';
import Signup from './pages/auth/signup/Signup.js';
import Dashboard from './pages/dashboard/Dashboard';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
    </>
  );
}

export default App;
