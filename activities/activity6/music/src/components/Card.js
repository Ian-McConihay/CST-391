// src/components/Card.js
import React from 'react';

export default function Card({ album, onShowDetails }) {
  return (
    <div className="card shadow-sm">
      <img
        src={album.image}
        className="card-img-top"
        alt={`${album.title} cover`}
        height="200"
      />
      <div className="card-body">
        <h5 className="card-title">{album.title}</h5>
        <p className="card-text mb-1"><strong>Artist:</strong> {album.artist}</p>
        <p className="card-text small text-muted">{album.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onShowDetails?.(album.albumId)}
          >
            Details
          </button>
          <span className="badge text-bg-light">{album.year}</span>
        </div>
      </div>
    </div>
  );
}