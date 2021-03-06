import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { Plat } from '../model/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  platUrl = "http://localhost:3000/plats";

  constructor(private http: HttpClient) { }

  addPlat(plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.platUrl, plat, this.httpOptions);
  }
  getPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.platUrl);
  }
  updatePlat(id: number, plat: Plat): Observable<Plat>{
    return this.http.put<Plat>(this.platUrl+ '/' + id , plat , this.httpOptions);
  }

  
  deleteplats(plat: Plat | number): Observable<Plat>{
    const id = typeof plat === 'number' ? plat : plat.id;
    const url = this.platUrl + '/' + id;
    return this.http.delete<Plat>(url);
  }
}
