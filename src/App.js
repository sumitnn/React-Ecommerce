import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mb-5 bg-dark ">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact" exact element={<ContactForm/>} />
        <Route path="*"  element={'404 Page Not Found'} />

      </Routes>
     
      
     
      
    </BrowserRouter>
  );
}

export default App;
