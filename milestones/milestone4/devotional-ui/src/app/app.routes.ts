import { Routes } from '@angular/router';
import { DevotionListComponent } from './devotion/devotion-list/devotion-list';
import { DevotionFormComponent } from './devotion/devotion-form/devotion-form';

export const routes: Routes = [
  { path: '', redirectTo: 'devotion', pathMatch: 'full' },
  { path: 'devotion', component: DevotionListComponent },
  { path: 'devotion/new', component: DevotionFormComponent },
  { path: 'devotion/:id', component: DevotionFormComponent },
  { path: 'devotion/edit/:id', component: DevotionFormComponent },
];
