
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Place from './components/Places/Place';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Header/> 
     <Home/>
     <Place/>
     {/* <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/UwNB78PZcsA?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     </div> */}
     <Footer/>
      
    </div>
  );
}

export default App;
