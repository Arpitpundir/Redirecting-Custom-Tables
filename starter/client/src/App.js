import React from 'react';
import logo from './logo.svg';
import {Switch, Route, Redirect} from "react-router-dom"
import FriendTable from "./FriendTable/FriendTable"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/friend" component = {FriendTable}/>
        <Redirect to = "/friend"/>
      </Switch>
    </div>
  );
}

export default App;
