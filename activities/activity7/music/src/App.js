import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchAlbum from './components/SearchAlbum';
import OneAlbum from './components/OneAlbum';
import NewAlbum from './components/NewAlbum';
import EditAlbum from './components/EditAlbum';

import albumsLocal from './albums.json';

function AppShell() {
  const [albumList, setAlbumList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setAlbumList(albumsLocal);
  }, []);

  const updateSearchResults = (phrase) => setSearchPhrase(phrase);

  const filteredAlbums = useMemo(() => {
    const p = searchPhrase.trim().toLowerCase();
    if (!p) return albumList;
    return albumList.filter((a) =>
      `${a.title} ${a.artist} ${a.description}`.toLowerCase().includes(p)
    );
  }, [albumList, searchPhrase]);

  const updateSingleAlbum = (albumId) => {
    setCurrentlySelectedAlbumId(albumId);
    navigate(`/show/${albumId}`);
  };

  const handleNewAlbum = (album) => {
    // Add an id if missing
    const withId = { id: Date.now(), ...album };
    setAlbumList([...albumList, withId]);
  };

 const handleEditAlbum = (albumId) => {
  const albumToEdit = albumList.find(a => a.albumId === albumId);
  setCurrentlySelectedAlbumId(albumId);
  navigate(`/edit/${albumId}`, { state: { album: albumToEdit } });
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
onEditAlbum={handleEditAlbum}               />
            }
          />
          <Route path="/new" element={<NewAlbum onNewAlbum={handleNewAlbum} />} />
<Route
  path="/edit/:albumId"
  element={
    <EditAlbum albums={albumList} onEditAlbum={(updated) => {
      setAlbumList(albumList.map(a => a.albumId === updated.albumId ? updated : a));
    }} />
  }
/>
          <Route
            path="/show/:albumId"
            element={
              <OneAlbum
                albums={albumList}
                selectedId={currentlySelectedAlbumId}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
      <AppShell />
  );
}