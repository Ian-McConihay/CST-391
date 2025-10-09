// src/dataSource.js
import axios from 'axios';

// If you have your Express MusicAPI running locally:
const BASE_URL = process.env.REACT_APP_API_BASE || 'http://localhost:5050';

export async function loadAlbumsFromApi() {
  const res = await axios.get(`${BASE_URL}/albums`);
  // Expected: Array of albums shaped like albums.json
  return res.data;
}

/*
export async function getAlbumById(id) {
  const res = await axios.get(`${BASE_URL}/albums/${id}`);
  return res.data;
}

export async function createAlbum(album) {
  const res = await axios.post(`${BASE_URL}/albums`, album);
  return res.data;
}
*/