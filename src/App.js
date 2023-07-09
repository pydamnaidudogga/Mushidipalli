import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Temples from './components/Temples/Temples';

function App() {
  return (
    <div className="App">
     
     
     
     {/* <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/UwNB78PZcsA?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     </div> */}
     

     <React.StrictMode>
     <Header/> 
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/temples" element={<Temples/>} />
      {/* <Route path='*' element={<InvalidRoute/>}/> */}
      
    </Routes>
  </Router>
  
  <Footer/>
 
  </React.StrictMode>



      
    </div>
  );
}

export default App;
