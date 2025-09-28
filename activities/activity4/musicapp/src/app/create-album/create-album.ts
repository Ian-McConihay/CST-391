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
    this.service.createAlbum(this.model).subscribe({
      next: (createdAlbum) => {
        alert(`Album "${createdAlbum.title}" created successfully!`);
        this.router.navigate(['/list-artists'], {
          queryParams: { data: new Date().toISOString() }
        });
      },
      error: (err) => {
        console.error('Error creating album:', err);
        alert('Error creating album. Please try again.');
      }
    });
  }
}
