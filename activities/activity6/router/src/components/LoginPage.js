import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPage({ onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  const handleLogin = () => {
    onClick(from);
  };

  return (
    <div className="text-center p-4">
      <h2>Login</h2>
      <p className="text-muted mb-3">
        Click the button below to simulate a login.
      </p>
      <button className="btn btn-primary" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
}