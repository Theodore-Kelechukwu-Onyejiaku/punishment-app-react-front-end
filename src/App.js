import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import  {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./components/navbar.component";
import PunishmentsList from "./components/punishment-list.component";
import EditPunishment from "./components/edit-punishment.component";
import CreatePunishment from "./components/create-punishment.component";
import CreatePunishee from "./components/create-punishee.component";

//We are going to import jquery from node_modules where you just copied it to
import "jquery-3.2.1.min.js";
import HowToUse from './components/how-to-use.component';

/* We are not going to use this logo */
//import logo from './logo.svg';
/* We are not going to use this CSS */
//import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component = {PunishmentsList} />
        <Route path="/edit/:id"  component = {EditPunishment} />
        <Route path="/create"  component = {CreatePunishment} />
        <Route path="/user" component = {CreatePunishee} />
        <Route path="/how" component = {HowToUse} />
        <div className="">
          <nav className="navbar fixed-bottom navbar-info bg-info">
              <a  className="text-center  text-white navbar-brand" href="#">Built Using React, NodeJS,<br/> ExpressJS, and MongoDB<br/>By Theodore Kelechukwu Onyejiaku</a>
          </nav>
        </div>
        
      </div>
      
    </Router>
  );
}

export default App;
