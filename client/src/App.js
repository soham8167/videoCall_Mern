import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Joinn from './Components/Joinn';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import CreateMeeting from './Pages/createMeeting';
import VideoCallPage from './Pages/VideoCallPage';
import ServicePage from './Pages/ServicePage';
import AdminDashboard from './Pages/AdminDashboard';
import AdminUser from './Pages/AdminUser';
import Logout from './Components/Logout';
import LogInAdmin from './Pages/AdminLogin';
import AdminInbox from './Pages/AdminInbox';
import ProtectedRoute from './Components/ProtectedRoute.js';
import NotFound from './Pages/NotFound.jsx';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} /> 
        <Route path='/login' element={< LogIn/>} /> 
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/joinn' element={<Joinn/>} /> 
        <Route path='/services'element={<ServicePage/>}/>
        <Route path='/about' element={<AboutPage/>} /> 
        <Route path='/contact' element={<ContactPage/>} /> 
        <Route path="/admin-login" element={<LogInAdmin/>} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/admin/dashboard' element={
            <ProtectedRoute adminOnly={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path='/admin/user' element={
            <ProtectedRoute adminOnly={true}>
              <AdminUser />
            </ProtectedRoute>
          } />
          <Route path='/admin/inbox' element={
            <ProtectedRoute adminOnly={true}>
              <AdminInbox />
            </ProtectedRoute>
          } />
          <Route path='/create-meeting' element={
            <ProtectedRoute>
              <CreateMeeting />
            </ProtectedRoute>
          } />
          <Route path='/room/:roomID' element={<VideoCallPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
