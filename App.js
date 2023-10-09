import { Routes, Route } from 'react-router-dom';
import './App.css';
import Top from './Navigation';
import Login from './Login';
import Signup from './Signup';
import Logout from './logout';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/login' element={<Login />} />
        <Route path= '/signup' element = {<Signup/>}/>
        <Route path= '/Logout' element = {<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App; 
