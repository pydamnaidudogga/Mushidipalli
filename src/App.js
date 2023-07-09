
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
     <Footer/>
      
    </div>
  );
}

export default App;
