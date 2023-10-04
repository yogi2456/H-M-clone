
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Mens from './Components/Mens';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Mens1 from './Components/Mens1';
import Shoppingbag from './Components/Shoppingbag';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path ='/' element={<Homepage />} />
        <Route exact path='/Mens' element={<Mens />} />
        <Route exact path='/Mens1' element={<Mens1 />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
        <Route exact path='/Shoppingbag' element={<Shoppingbag />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
