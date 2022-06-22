import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { Champion } from '../model/champion';
import { BASE_URL } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  constructor(private _httpClient: HttpClient) {}

  async getAll(): Promise<Champion[]> {
    try {
      const res = await fetch(`${BASE_URL}/champions`);
      const champions = await res.json();
      return champions;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}
