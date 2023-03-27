import Home from './components/Home';
import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PatientRegistration from './components/PatientRegistration';
import DoctorLogin from './components/DoctorLogin';
import PatientLogin from './components/PatientLogin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/PatientRegistration' element={<PatientRegistration/>}></Route> 
      <Route path='/DoctorLogin' element={<DoctorLogin/>}></Route> 
      <Route path='/PatientLogin' element={<PatientLogin />}></Route>  
    </Routes>
    </BrowserRouter>  
  </> 
  );
}

export default App;
