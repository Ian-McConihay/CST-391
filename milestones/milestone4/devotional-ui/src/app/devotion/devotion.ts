// devotion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevotionService {
private apiUrl = 'http://localhost:3000/api/devotions';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Devotion[]> {
    return this.http.get<Devotion[]>(this.apiUrl);
  }

  getById(id: number): Observable<Devotion> {
    return this.http.get<Devotion>(`${this.apiUrl}/${id}`);
  }

  create(devotion: Devotion): Observable<Devotion> {
    return this.http.post<Devotion>(this.apiUrl, devotion);
  }

  update(id: number, devotion: Devotion): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, devotion);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
export interface Devotion {
  id?: number;
  title: string;
  content: string;
  date: string;
  created_at?: string;
}
