// src/app/service/music-service.service.ts
// This service provides methods to query, create, update, and delete album and artist data.
// Unlike the previous version (which used local JSON), this one uses HttpClient
// to communicate with the backend Express MusicAPI.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../models/albums.model';
import { Artist } from '../models/artists.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {
  // Base URL of the Express MusicAPI backend (adjust if needed)
  private host = 'http://localhost:5050';

  constructor(private http: HttpClient) {}

  /**
   * getArtists
   * Calls the backend API to get a list of artists.
   * Returns an Observable that components can subscribe to.
   */
  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.host}/artists`);
  }

  /**
   * getAlbums
   * Calls the backend API to get albums.
   * If artist is provided, filters albums by artist.
   */
  getAlbums(artist?: string): Observable<Album[]> {
    return artist
      ? this.http.get<Album[]>(`${this.host}/albums?artist=${artist}`)
      : this.http.get<Album[]>(`${this.host}/albums`);
  }

  /**
   * getAlbum
   * Calls the backend API to fetch a single album by artist + id.
   */
  getAlbum(artist: string, id: number): Observable<Album> {
    return this.http.get<Album>(`${this.host}/albums/${artist}/${id}`);
  }

  /**
   * createAlbum
   * Posts a new album to the backend API.
   */
  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.host}/albums`, album);
  }

  /**
   * updateAlbum
   * Puts an updated album back to the backend API.
   */
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.host}/albums/${album.artist}/${album.albumId}`, album);
  }

  /**
   * deleteAlbum
   * Deletes an album from the backend API.
   */
  deleteAlbum(id: number, artist: string): Observable<void> {
    return this.http.delete<void>(`${this.host}/albums/${artist}/${id}`);
  }
}
