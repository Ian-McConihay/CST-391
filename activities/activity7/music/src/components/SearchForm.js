// src/components/SearchForm.js
import React, { useState } from 'react';

export default function SearchForm({ onSubmit }) {
  const [inputText, setInputText] = useState('');

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent full-page postback
    onSubmit?.(inputText);
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2 align-items-center">
        <div className="col-sm-8 col-md-6 col-lg-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search albums (title, artist, description)…"
            value={inputText}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </div>
      </div>
    </form>
  );
}