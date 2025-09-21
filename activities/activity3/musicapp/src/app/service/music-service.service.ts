// src/app/service/music-service.service.ts
// This service acts as a façade between Angular components and the music data.
// It provides methods to query, create, update, and delete album and artist data.
// The data is loaded from a mock JSON file to simulate how the service will
// eventually communicate with a backend API.

import { Injectable } from '@angular/core';
import data from '../../data/sample-music-data.json'; // Mock JSON file with albums
import { Album } from '../models/albums.model';       // Album model (structure of album objects)
import { Artist } from '../models/artists.model';     // Artist model (structure of artist objects)

@Injectable({ providedIn: 'root' }) // Makes the service available app-wide
export class MusicServiceService {
  // Initialize the albums array from JSON data.
  // Casting is necessary because TypeScript treats raw JSON as 'any'.
  private albums: Album[] = (data as Album[]);

  /**
   * getArtists
   * Extracts a unique, alphabetically sorted list of artists from the albums array.
   * Returns an array of Artist objects, each containing only the artist name.
   */
  getArtists(): Artist[] {
    const unique = new Map<string, Artist>(); // Map used to ensure no duplicate artist names
    for (const a of this.albums) {
      if (!unique.has(a.artist)) {
        unique.set(a.artist, { artist: a.artist });
      }
    }
    // Convert the map values to an array and sort alphabetically by artist name
    return Array.from(unique.values()).sort((x, y) => x.artist.localeCompare(y.artist));
  }

  /**
   * getAlbums
   * Returns all albums if no artist is specified.
   * If an artist name is provided, only albums by that artist are returned.
   */
  getAlbums(artist?: string): Album[] {
    return artist
      ? this.albums.filter(a => a.artist === artist) // filter by artist name
      : this.albums.slice(); // return a shallow copy of the full album list
  }

  /**
   * getAlbum
   * Finds a specific album by artist and albumId.
   * Returns the matching Album or null if not found.
   */
  getAlbum(artist: string, id: number): Album | null {
    return this.albums.find(a => a.artist === artist && a.albumId === id) ?? null;
  }

  /**
   * createAlbum
   * Adds a new album to the albums array.
   * Assigns a new unique albumId using the current max + 1.
   * Returns the new albumId on success, or -1 if an error occurred.
   */
  createAlbum(album: Album): number {
    try {
      const nextId = Math.max(0, ...this.albums.map(a => a.albumId)) + 1; // compute next ID
      album.albumId = nextId;
      this.albums.push(album); // add the new album
      return album.albumId;
    } catch {
      return -1; // error case
    }
  }

  /**
   * updateAlbum
   * Updates an existing album in the array by replacing it at the found index.
   * Returns 0 if successful, or -1 if the album was not found.
   */
  updateAlbum(album: Album): number {
    const index = this.albums.findIndex(a => a.albumId === album.albumId);
    if (index === -1) return -1; // album not found
    this.albums.splice(index, 1, album); // replace album at the found index
    return 0; // success
  }

  /**
   * deleteAlbum
   * Removes an album by id and artist.
   * Returns 0 if successful, or -1 if no matching album was found.
   */
  deleteAlbum(id: number, artist: string): number {
    const index = this.albums.findIndex(a => a.albumId === id && a.artist === artist);
    if (index === -1) return -1; // album not found
    this.albums.splice(index, 1); // remove album at the found index
    return 0; // success
  }

  /**
   * getAlbumsOfArtist
   * Convenience helper used by the ListAlbums component.
   * Returns all albums for the given artist.
   */
  getAlbumsOfArtist(artist: string): Album[] {
    return this.getAlbums(artist);
  }
}
