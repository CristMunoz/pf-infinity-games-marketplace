import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import Store from './views/Store';
import Favorites from './views/Favorites';
import MyProfile from './views/MyProfile';
import Publications from './views/Publications';
import Details from './views/Details';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GameProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/store' element={<Store />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/publications' element={<Publications />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </GameProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
