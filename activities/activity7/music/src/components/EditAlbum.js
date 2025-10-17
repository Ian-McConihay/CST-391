// src/components/EditAlbum.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditAlbum({ albums = [], onEditAlbum }) {
  const navigate = useNavigate();
  const { albumId } = useParams();

  const albumToEdit = albums?.find(
    (a) => String(a.albumId) === String(albumId)
  );

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (albumToEdit) {
      setTitle(albumToEdit.title || "");
      setArtist(albumToEdit.artist || "");
      setYear(albumToEdit.year || "");
      setDescription(albumToEdit.description || "");
    }
  }, [albumToEdit]);

  if (!albums || albums.length === 0) {
    return <div>Loading albums...</div>;
  }

  if (!albumToEdit) {
    return <div>No album selected for editing.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const updatedAlbum = {
        ...albumToEdit,
        title,
        artist,
        year,
        description,
      };

      onEditAlbum?.(updatedAlbum);

      setStatusMessage("Album updated successfully!");
      setTimeout(() => navigate("/"), 800);
    } catch (error) {
      console.error("Edit failed:", error);
      setStatusMessage("Failed to update album. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Album</h2>
      {statusMessage && (
        <div className="alert alert-info mt-2">{statusMessage}</div>
      )}

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
          <label className="form-label">Year</label>
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
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
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}