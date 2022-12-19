import React from 'react'
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import Wallchart from './components/wallchart/Wallchart';
import { Routes,Route,BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Summary/>}></Route>
          <Route path='/aprove' element={<Wallchart/>}></Route>
        </Routes>
      </BrowserRouter>


    </>
    
 
    
    
   
 
  );
}

export default App