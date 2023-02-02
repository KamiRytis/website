import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Register from './components/Register';
import LogIn from './components/LogIn';


function App() {
  return (
    <>
      <Routes>
          <Route element={<Header />}>
              <Route path='/' element={<Home />}/>
              <Route path='/add' element={<Add />}/>
          </Route>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<LogIn />}/>
      </Routes></>
  );
}

export default App;
