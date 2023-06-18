import './App.css';
import Main from './pages/Main';
import Details from './pages/Details';
import Update from './pages/Update';
import React from 'react';

import { Routes, Route } from 'react-router'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Details />} path="/products/:id" />
        <Route element={<Update />} path="/products/update/:id" />
      </Routes>
    </div>
  );
}

export default App;
