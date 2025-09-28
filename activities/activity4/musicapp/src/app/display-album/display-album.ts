// src/app/display-album/display-album.component.ts
import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-display-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent implements OnInit {
  album: Album | null = null;

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const artist = params.get('artist'); // if route includes artist param

      if (artist) {
        // get a single album by artist + id
        this.service.getAlbum(artist, id).subscribe(album => {
          this.album = album;
        });
      } else {
        // fallback if only id is present in route
        this.service.getAlbums().subscribe(albums => {
          const found = albums.find(a => a.albumId === id) || null;
          if (found) {
            this.album = found;
          }
        });
      }
    });
  }
}
