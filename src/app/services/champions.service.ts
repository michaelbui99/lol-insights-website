import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from '../model/champion';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<Champion[]> {
    throw 'Not implemented yet';
  }
}
