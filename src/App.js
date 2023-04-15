// import logo from './logo.svg';
import Navbar from './Navbar';
import TextForm from './TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //state for dark mode
  const [alert, setAlert] = useState(null);
  const [btntext, setBtnText] = useState("Enable Dark Mode")
const showAlert = (message, type) => {
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}



const toggleMode= () => {
if (mode === 'light') {
  setMode('dark');
  document.body.style.backgroundColor = "#272a2e";
  // backgroundColor: "#272a2e";
  // document.body.style.color = "#272a2e";
  showAlert("Dark Mode has been Enabled!","success");
  setBtnText("Enable Light Mode");
} else {
  setMode('light');
  document.body.style.backgroundColor = "white";
  // backgroundColor:"white";
  // document.body.style.color = "white";
  showAlert("Light Mode has been Enabled!","success");
  setBtnText("Enable Dark Mode");
}
}


  return ( <>
 <Router>

 <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntext={btntext}/>
<Alert alert={alert}/>
 <div className="container">
 <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
 <TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode} toggleMode={toggleMode}/>
 </Route>
</Switch>
{/* <TextForm showAlert={showAlert} heading="Enter Text Below" mode={mode} toggleMode={toggleMode}/> */}
 
 </div>
  </Router>
  </>
  
  );

  }
export default App;
