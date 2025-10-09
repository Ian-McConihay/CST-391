// src/components/OneAlbum.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function OneAlbum({ albums, selectedId }) {
  const { albumId } = useParams();
  const id = selectedId ?? Number(albumId);

  const album = albums.find((a) => a.albumId === id);

  if (!album) {
    return (
      <div>
        <p className="text-muted">Album not found.</p>
        <Link to="/" className="btn btn-sm btn-secondary">Back</Link>
      </div>
    );
  }

  return (
    <div className="row g-4">
      <div className="col-md-4">
        <img
          src={album.image}
          className="img-fluid rounded shadow-sm"
          alt={`${album.title} cover`}
        />
      </div>
      <div className="col-md-8">
        <h2 className="mb-1">{album.title}</h2>
        <p className="text-muted mb-2">{album.artist} &middot; {album.year}</p>
        <p>{album.description || 'No description provided.'}</p>

        <h5 className="mt-4">Tracks</h5>
        {album.tracks?.length ? (
          <ol className="list-group list-group-numbered">
            {album.tracks.map(t => (
              <li key={t.trackId} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{t.title}</span>
                <span className="badge text-bg-light">#{t.number}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-muted">No tracks available.</p>
        )}

        <div className="mt-4">
          <Link to="/" className="btn btn-secondary">Back</Link>
        </div>
      </div>
    </div>
  );
}