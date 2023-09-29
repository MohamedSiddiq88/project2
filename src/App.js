import { Route, Routes } from 'react-router-dom';
import './App.css';
// import MainPage from './components/MainPage';
import Signup from './components/Signup';
import Login from './components/Login';
import MailCheck from './components/Mailcheck'
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Studentsprofiles from './components/Studentsprofiles';
import Edit from './components/Edit';
import Teachersprofiles from './components/Teachersprofiles';
import AddTeacher from './components/AddTeacher';
import EditTeacher from './components/EditTeacher';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mailcheck" element={<MailCheck />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/add" element={<Add />} />
        <Route path="/student" element={<Studentsprofiles />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/teacher" element={<Teachersprofiles />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/editteacher" element={<EditTeacher />} />


       </Routes>
    </div>
  );
}

export default App;
