import React from "react";
import '/Users/ianmcconihay/git/CST-391/activities/activity7/music/src/App.css';
import { useNavigate } from "react-router-dom";

export default function Card({ album, onShowDetails, onEditAlbum }) {
  const navigate = useNavigate();

  const handleButtonClick = (albumId, uri) => {
    console.log("Album clicked:", albumId, "URI:", uri);

    if (uri.startsWith("/show/")) {
      onShowDetails?.(albumId);
    } else if (uri.startsWith("/edit/")) {
      onEditAlbum?.(albumId);
      navigate(`/edit/${albumId}`);
    }
  };

  return (
    <div className="card shadow-sm album-card">
      <img
        src={album.image}
        className="card-img-top"
        alt={`${album.title} album cover`}
      />
      <div className="card-body">
        <h5 className="card-title">{album.title}</h5>
        <p className="card-text">
          <strong>Artist:</strong> {album.artist}
        </p>
        <p className="card-text small text-muted">{album.description}</p>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => handleButtonClick(album.albumId, "/show/")}
          >
            Details
          </button>
<button
  className="btn btn-secondary btn-sm"
  onClick={() => navigate(`/edit/${album.albumId}`, { state: { album } })}
>
  Edit
</button>
        </div>
      </div>
    </div>
  );
}