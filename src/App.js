import Logout from './component/Auth/Logout';
import Login from './component/Auth/Login';
import Profile from './component/Main/Profile';
import { Routes, Route } from 'react-router-dom'
import Header from './component/Main/Header';
import Home from './component/Main/Home';
import UserData from './component/Main/UserData';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/userdata' element={<UserData />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
