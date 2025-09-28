import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DevotionService } from '../devotion';
import { Devotion } from '../devotion';

@Component({
  standalone: true,
  selector: 'app-devotion-form',
  templateUrl: './devotion-form.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class DevotionFormComponent implements OnInit {
  // Matches the new DB schema (no scripture/reflection)
  devotion: Devotion = { title: '', content: '', date: '' };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private devotionService: DevotionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.devotionService.getById(id).subscribe((data: Devotion) => {
        this.devotion = data;
      });
    }
  }

 onSubmit() {
  console.log('Submitting devotion:', this.devotion);  // ← DEBUG LINE

  const request = this.isEditMode
    ? this.devotionService.update(this.devotion.id!, this.devotion)
    : this.devotionService.create(this.devotion);

  request.subscribe({
    next: () => this.router.navigate(['/devotion']),
    error: err => console.error('Update failed:', err)
  });
}
}
