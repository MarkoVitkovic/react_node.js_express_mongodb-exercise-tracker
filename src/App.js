import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import Edit from "./components/Edit";
import CreateUser from "./components/CreateUser";
import CreateExercise from "./components/CreateExercise";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route exact path ="/" component = {ExercisesList}/>
        <Route exact path ="/edit/:id" component = {Edit}/>
        <Route exact path ="/create" component = {CreateExercise}/>
        <Route exact path ="/user" component = {CreateUser}/>
      </div>
    </Router>
  );
}

export default App;
