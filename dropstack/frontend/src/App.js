import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Form from "./components/form/Form";
import UserInfo from './components/admin/UserInfo';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/adminpanel' element={<UserInfo />} />
    </Routes>
  </BrowserRouter>
}

export default App;
