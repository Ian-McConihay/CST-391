import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import AboutThisSite from './components/AboutThisSite';
import ContactUs from './components/ContactUs';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import User from './components/User';

function AppShell() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (from) => {
    setIsLoggedIn(true);
    navigate(from);
  };

  return (
    <>
      <NavBar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<User />} />
          <Route
            path="/about"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AboutThisSite />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ContactUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={<LoginPage onClick={handleLogin} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}