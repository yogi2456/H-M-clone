
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ='/' element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
