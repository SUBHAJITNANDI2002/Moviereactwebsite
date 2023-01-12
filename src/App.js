import React from 'react';
import Home from "./Home";
import {Routes,Route} from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Error from './Error';
import "./App.css";



const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="movie/:id" element={<SingleMovie />}  />
        <Route path="*" element={<Error/>}></Route>
      </Routes>

    </div>
  );
};

export default App

