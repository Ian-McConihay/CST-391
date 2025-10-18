import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import DevotionList from './components/DevotionList';
import DevotionForm from './components/DevotionForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  function handleSaved(message) {
    setRefresh(!refresh);
    setStatusMessage(message);
  }

  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand mb-0 h1">Devotional Tracker</span>
      </nav>

      {statusMessage && (
        <div className="alert alert-success text-center m-3" role="alert">
          {statusMessage}
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={<DevotionList key={refresh} />}
        />
        <Route
          path="/add"
          element={<DevotionForm onSaved={handleSaved} />}
        />
        <Route
          path="/edit/:id"
          element={<DevotionForm onSaved={handleSaved} />}
        />
      </Routes>
    </Router>
  );
}

export default App;