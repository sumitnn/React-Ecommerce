import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mb-4 bg-warning">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="*"  element={'404 Page Not Found'} />

      </Routes>
     
      
     
      
    </BrowserRouter>
  );
}

export default App;
