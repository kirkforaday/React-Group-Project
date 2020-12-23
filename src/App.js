import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/Components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Footer />
    </>
  );
}

export default App;
