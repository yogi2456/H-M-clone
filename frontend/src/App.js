
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Mens from './Components/Mens';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ='/' element={<Header />} />
        <Route exact path='/Mens' element={<Mens />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
