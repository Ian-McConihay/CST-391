import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DevotionService } from '../devotion';
import { FormsModule } from '@angular/forms';
import { Devotion } from '../devotion';

@Component({
  standalone: true,
  selector: 'app-devotion-list',
  templateUrl: './devotion-list.html',
  imports: [CommonModule, RouterModule, FormsModule]
})
export class DevotionListComponent implements OnInit {
  devotions: Devotion[] = [];

  constructor(private devotionService: DevotionService) {}

  ngOnInit(): void {
    this.loadDevotions();
  }

  loadDevotions() {
    this.devotionService.getAll().subscribe((data: Devotion[]) => {
      this.devotions = data;
    });
  }

  delete(id: number) {
    this.devotionService.delete(id).subscribe(() => this.loadDevotions());
  }
}
