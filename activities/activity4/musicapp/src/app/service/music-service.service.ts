// src/app/service/music-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/albums.model';
import { Artist } from '../models/artists.model';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {
  private host = 'http://localhost:5050';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.host}/artists`);
  }

  getAlbums(artist?: string): Observable<Album[]> {
    return artist
      ? this.http.get<Album[]>(`${this.host}/albums?artist=${artist}`)
      : this.http.get<Album[]>(`${this.host}/albums`);
  }

  getAlbum(artist: string, id: number): Observable<Album> {
    return this.http.get<Album>(`${this.host}/albums/${artist}/${id}`);
  }

  createAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.host}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.host}/albums/${album.artist}/${album.albumId}`, album);
  }

  deleteAlbum(id: number, artist: string): Observable<void> {
    return this.http.delete<void>(`${this.host}/albums/${artist}/${id}`);
  }
}
