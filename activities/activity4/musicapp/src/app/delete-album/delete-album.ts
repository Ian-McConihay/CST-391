import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-delete-album',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Delete Album</h2>
      <p *ngIf="artist && id">
        Are you sure you want to delete album #{{ id }} by {{ artist }}?
      </p>
      <button class="btn btn-danger" (click)="confirmDelete()">Yes, Delete</button>
      <button class="btn btn-secondary" (click)="cancel()">Cancel</button>
    </div>
  `,
})
export class DeleteAlbumComponent implements OnInit {
  artist: string | null = null;
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: MusicServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.artist = this.route.snapshot.paramMap.get('artist');
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  confirmDelete(): void {
    if (this.artist && this.id) {
      this.service.deleteAlbum(this.id, this.artist).subscribe({
        next: () => {
          alert(`Album #${this.id} deleted successfully.`);
          this.router.navigate(['/list-artists']);
        },
        error: (err) => {
          console.error('Error deleting album', err);
          alert('Failed to delete album.');
        },
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/list-artists']);
  }
}
