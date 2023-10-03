
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Mens from './Components/Mens';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path ='/' element={<Homepage />} />
        <Route exact path='/Mens' element={<Mens />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
