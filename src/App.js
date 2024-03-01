import React , {useState} from 'react';

import { BrowserRouter, useHistory} from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Home from './components/Home/Home';
import  './App.css';
// import Home from './components/Home/Home';

// import LoginSignup from './components/LoginSignup/LoginSignup';



function App() {
  

  const[allEntry,setAllEntry]= useState([]);

  return (
    <div>
      <BrowserRouter>
        <LoginSignup setAllEntry={setAllEntry} />
        <Home allEntry={allEntry} />
      </BrowserRouter>
    </div>
   
  );
  }

export default App;
