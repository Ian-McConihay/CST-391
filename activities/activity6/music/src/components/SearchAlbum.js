// src/components/SearchAlbum.js
import React from 'react';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

export default function SearchAlbum({ albums, onSubmitSearch, onShowDetails }) {
  return (
    <>
      <h1 className="mb-3">Albums</h1>
      <SearchForm onSubmit={onSubmitSearch} />
      <AlbumList albums={albums} onShowDetails={onShowDetails} />
    </>
  );
}