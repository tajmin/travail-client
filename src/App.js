
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home';
import Jobs from './Pages/Jobs/Jobs';
import Login from './Pages/Login/Login';
import ProfailDrawer from './Pages/Profail/ProfailDrawer/ProfailDrawer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login></Login>} />
            <Route path='/' element={<Home></Home>} />
            <Route path='/jobs' element={<Jobs></Jobs>} />
            <Route path='/my-profile' element={<ProfailDrawer></ProfailDrawer>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );

}

export default App;
