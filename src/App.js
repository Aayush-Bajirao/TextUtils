import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type 
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }

 

  
  }

  return (
    <>
    <Router>
      
      <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>

      {/* <div className='container my-3'>
        <TextForm heading='Enter the text to Analyze' />
      </div> */}

      {/* exact is usded to tell react that take this exact route or else it won't take exact route and can cause problems*/}
      {/* ex /user           --> route
             /user/component --> exact route */}

      <div className='container my-3'>    
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route exact path="/" element={<TextForm heading='Enter the text to Analyze' showAlert={showAlert} alert={alert} mode={mode} />}></Route>             
        </Routes>
      </div>
    </Router>


    </> 
  );
 
}
 export default App;