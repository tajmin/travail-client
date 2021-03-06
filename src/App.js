import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JobFullDetails from './components/Job/JobFullDetails';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home';
import Jobs from './Pages/Jobs/Jobs';
import Login from './Pages/Login/Login';
import PostAJob from './Pages/PostAJob/PostAJob';
import SignUp from './Pages/SignUp/SignUp';
import ProfailDrawer from './Pages/Profail/ProfailDrawer/ProfailDrawer'
import MyApplication from './Pages/Profail/MyApplicationf/MyApplication';
import AllApplication from './Pages/Profail/AllApplications/AllApplicaions';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Contact from './Pages/Contact/Contact';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/jobs' element={<Jobs></Jobs>} />
            <Route path='/postjob' element={<PrivateRoute><PostAJob></PostAJob></PrivateRoute>} />
            <Route path='/created-jobs' element={<PrivateRoute><AllApplication></AllApplication></PrivateRoute>} />
            <Route path='/my-applications' element={<PrivateRoute><MyApplication></MyApplication></PrivateRoute>} />
            <Route path='/my-profile' element={<ProfailDrawer></ProfailDrawer>} />
            <Route path='/sign-up' element={<SignUp></SignUp>} />
            <Route path='/fullDetails/:id' element={<JobFullDetails></JobFullDetails>} />
            <Route path='/dashboard' element={<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>} />
            <Route path='/contact' element={<Contact></Contact>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );

}

export default App;
