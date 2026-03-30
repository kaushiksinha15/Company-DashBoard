import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import EditProfile from './EditProfile';

function App() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const register = (companyData) => {
    const exists = companies.find(c => c.email === companyData.email);
    if (exists) {
      alert('Email already registered!');
      return false;
    }
    const newCompany = { ...companyData, id: Date.now() }; 
    setCompanies([...companies, newCompany]);
    setCurrentUser(newCompany); 
    navigate('/dashboard');
    return true;
  };
  const login = (email, password) => {
    const user = companies.find(c => c.email === email && c.password === password);
    if (user) {
      setCurrentUser(user);
      navigate('/dashboard');
    } else {
      alert('Invalid Email or Password');
    }
  };
  const logout = () => {
    setCurrentUser(null);
    navigate('/login');
  };
  const updateProfile = (updatedData) => {
    const updatedList = companies.map(c =>
      c.id === currentUser.id ? { ...c, ...updatedData } : c
    );
    setCompanies(updatedList);
    setCurrentUser({ ...currentUser, ...updatedData });
    alert('Profile Updated!');
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar user={currentUser} logout={logout} />
      <Routes>
        {/* Redirect home to login if not logged in */}
        <Route path="/" element={!currentUser ? <Login login={login} /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" element={<Register register={register} />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={currentUser ? <Dashboard user={currentUser} /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-profile"
          element={currentUser ? <EditProfile user={currentUser} updateProfile={updateProfile} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;