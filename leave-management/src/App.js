import React from 'react'
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import Wallchart from './components/wallchart/Wallchart';
import MyLeaves from './components/myleaves/MyLeaves';
import SubmitRequest from './components/submit-request/SubmitRequest';

import { Routes,Route,BrowserRouter } from "react-router-dom";




const App = () => {
  return (
    <>


    

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Summary/>}></Route>
          <Route path='/aprove' element={<Wallchart/>}></Route>
          <Route path='/myleave' element={<MyLeaves/>}></Route>
           <Route path='/submit' element={<SubmitRequest/>}></Route>
        </Routes>
      </BrowserRouter>




    </>
    
 
    
    
   
 
  );
}

export default App