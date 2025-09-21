import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';
import { Artist } from '../models/artists.model';

@Component({
  selector: 'app-list-artists',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {
  artists: Artist[] = [];
  selectedArtist: Artist | null = null;

  constructor(private service: MusicServiceService) {}

  ngOnInit(): void {
    this.artists = this.service.getArtists();
  }

  onSelectArtist(artist: Artist): void {
    this.selectedArtist = artist;
    console.log('Selected artist:', artist.artist);
  }
}
