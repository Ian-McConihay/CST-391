// src/app/create-album/create-album.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicServiceService } from '../service/music-service.service';
import { Album } from '../models/albums.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-album',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent {
  model: Album = {
    albumId: 0,
    title: '',
    artist: '',
    description: '',
    year: '',
    image: '',
    tracks: []
  };

  constructor(private service: MusicServiceService, private router: Router) {}

  onSubmit() {
    const id = this.service.createAlbum(this.model);
    if (id > 0) {
      alert('Album created (mock).');
      this.router.navigate(['/list-artists'], { queryParams: { data: new Date().toISOString() } });
    } else {
      alert('Error creating album.');
    }
  }
}
