// src/app/list-albums/list-albums.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../models/albums.model';
import { Artist } from '../models/artists.model';
import { MusicServiceService } from '../service/music-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  @Input() artist!: Artist;
  albums: Album[] = [];
  selectedAlbum: Album | null = null;

  constructor(private service: MusicServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // support navigation from Artists via query param
    this.route.queryParams.subscribe(params => {
      const artistName = params['artist'] ?? this.artist?.artist;
      if (artistName) {
        this.albums = this.service.getAlbumsOfArtist(artistName);
      } else {
        this.albums = this.service.getAlbums();
      }
      this.selectedAlbum = null;
    });
  }

  onSelectAlbum(album: Album) {
    this.selectedAlbum = album;
  }
}
