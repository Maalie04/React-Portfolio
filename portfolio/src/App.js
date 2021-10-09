import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import './App.css';

function App() {
  return (
  <div className="App"> 
   <About></About>
   <Contact></Contact>
   <Navbar></Navbar>
   <Portfolio></Portfolio>
   <Resume></Resume>
   </div>
  );
}

export default App;
