import './App.css';
import Navbar from './components/home/Navbar';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import NosotrosPage from './pages/NosotrosPage';
import NuestraformaPage from './pages/NuestraFormaPage';
import ServiciosPage from './pages/ServiciosPage';


function App() {
  return (
    <div className="App">
      <div>
        <div className='navbar'>
        <Navbar></Navbar>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/nosotros' element={<NosotrosPage/>} />
            <Route path='/trabajos' element={<NuestraformaPage/>} />
            <Route path='/servicios' element={<ServiciosPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
