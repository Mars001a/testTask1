import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';


function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/repositories' element={<Repositories/>} />
      </Routes>
      
    </div>
  );
}

export default App;
