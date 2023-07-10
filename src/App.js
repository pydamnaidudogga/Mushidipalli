import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Lists from './components/ShowList/Lists';
import InvalidRoute from './components/InvalidRoute';

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
      <Route exact path="/temples" element={<Lists/>} />
      <Route exact path="/ponds" element={<Lists/>} />
      <Route exact path="/schools" element={<Lists/>} />
      <Route exact path="/govtOffices" element={<Lists/>} />

      <Route path='*' element={<InvalidRoute/>}/>
      
    </Routes>
  </Router>
  
  <Footer/>
 
  </React.StrictMode>



      
    </div>
  );
}

export default App;
