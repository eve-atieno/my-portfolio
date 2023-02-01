import './App.css';
import NavBar from './ components/NavBar';
import Home from './ components/Home';
import About from './ components/About';
import Contact from './ components/Contact';
import {Route,Routes} from 'react-router-dom';
import Services from './ components/Services';
import Skills from './ components/Skills';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
    </Routes>
    
    </>
      
    
  );
}

export default App;
