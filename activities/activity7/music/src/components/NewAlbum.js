import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewAlbum = ({ onNewAlbum }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlbum = {
      id: Date.now(), // simple unique id
      title,
      artist,
      description,
      year,
    };

    onNewAlbum(newAlbum);

    // navigate back home
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Create New Album</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Artist</label>
          <input
            type="text"
            className="form-control"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Album</button>
      </form>
    </div>
  );
};

export default NewAlbum;