// src/components/AlbumList.js
import React from 'react';
import Card from './Card';

export default function AlbumList({ albums, onShowDetails }) {
  if (!albums || albums.length === 0) {
    return <div className="text-muted">No albums found.</div>;
  }

  return (
    <div className="album-grid">
      {albums.map((a) => (
        <div key={a.albumId}>
          <Card album={a} onShowDetails={onShowDetails} />
        </div>
      ))}
    </div>
  );
}