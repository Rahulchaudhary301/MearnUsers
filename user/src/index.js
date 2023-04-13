import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import User from './Component/User';
import GetData from './Component/GetData';
import Card from './Component/Card';
import Heading from './Component/Heading';
import Home from './Component/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Heading/>
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='home' element={<Home/>}></Route>
      <Route path='userCreate' element={<User/>}></Route>
      <Route path='userData' element={<GetData/>}></Route>
    </Routes>
  </BrowserRouter>
  
  </>

);

