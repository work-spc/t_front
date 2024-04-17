import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import TestComponent from './Test/TestComponent';
import Result from './Test/Result';
import React from 'react';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <div className='greet_background'>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/test" element={<TestComponent add={1} />}/>
      {/* <Route path="/result" element={<TestComponent add={5} />}/> */}
    </Routes>
    </div>
    <footer>
      <div className='footer_container'>  
      </div>
      <div className='footer_mover' id="footer"/>
    </footer>
    </BrowserRouter>
    
    </>
  );
}

export default App;
