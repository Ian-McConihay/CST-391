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
      // we don’t have artist in the route here; grab by id only:
      const found = this.service.getAlbums().find(a => a.albumId === id) || null;
      if (found) {
        this.album = this.service.getAlbum(found.artist, id);
      }
    });
  }
}
