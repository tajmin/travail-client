
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import JobFullDetails from './components/Job/JobFullDetails';
import AuthProvider from './context/AuthProvider';

import Home from './Pages/Home/Home';
import Jobs from './Pages/Jobs/Jobs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ProfailDrawer from './Pages/Profail/ProfailDrawer/ProfailDrawer'
import MyApplication from './Pages/Profail/MyApplicationf/MyApplication';

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
            <Route path='/sign-up' element={<SignUp></SignUp>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );

}

export default App;
