// src/App.js
import React, { useEffect, useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchAlbum from './components/SearchAlbum';
import OneAlbum from './components/OneAlbum';
import NewAlbum from './components/NewAlbum';

import albumsLocal from './albums.json'; // Part 3 (local JSON)
import { loadAlbumsFromApi } from './dataSource'; // Part 3 (Axios/API)

// Toggle this flag to move from local JSON -> REST API
const USE_API = true;

function App() {
  const [albumList, setAlbumList] = useState([]); // all albums
  const [searchPhrase, setSearchPhrase] = useState(''); // filter
 const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(null);

  const navigate = useNavigate();

  // Load data (JSON or API)
  useEffect(() => {
    const load = async () => {
      if (!USE_API) {
        setAlbumList(albumsLocal);
      } else {
        try {
          const data = await loadAlbumsFromApi();
          setAlbumList(data);
        } catch (e) {
          console.error('Failed to load albums from API:', e);
          setAlbumList([]); // fail-safe
        }
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSearchResults = (phrase) => setSearchPhrase(phrase);

  const filteredAlbums = useMemo(() => {
    const p = searchPhrase.trim().toLowerCase();
    if (!p) return albumList;
    return albumList.filter((a) => {
      const haystack = `${a.title} ${a.artist} ${a.description}`.toLowerCase();
      const match = haystack.includes(p);
      if (!match) console.log('No match for:', a.title);
      return match;
    });
  }, [albumList, searchPhrase]);

  const updateSingleAlbum = (albumId) => {
    setCurrentlySelectedAlbumId(albumId);
    navigate(`/show/${albumId}`);
  };

  return (
    <>
      <NavBar />
      <div className="container py-4">
        <Routes>
          <Route
            path="/"
            element={
              <SearchAlbum
                albums={filteredAlbums}
                onSubmitSearch={updateSearchResults}
                onShowDetails={updateSingleAlbum}
              />
            }
          />
          <Route path="/new" element={<NewAlbum />} />
          <Route
            path="/show/:albumId"
            element={
              <OneAlbum
                albums={albumList}
                selectedId={currentlySelectedAlbumId}
              />
            }
          />
          <Route
            path="*"
            element={
              <SearchAlbum
                albums={filteredAlbums}
                onSubmitSearch={updateSearchResults}
                onShowDetails={updateSingleAlbum}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;