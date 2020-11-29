import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypePlat } from '../model/typeplat';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  typeurl = "http://localhost:3000/typeplat";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getAllTypePlat():Observable<TypePlat[]>{
    return this.http.get<TypePlat[]>(this.typeurl);
  }

  addTypePlat(typeplat: TypePlat): Observable<TypePlat> {
    return this.http.post<TypePlat>(this.typeurl, typeplat, this.httpOptions);
  }

  deleteTypePlat(typeplat: TypePlat | number): Observable<TypePlat>{
    const id = typeof typeplat === 'number' ? typeplat : typeplat.id;
    const url = this.typeurl + '/' + id;
    console.log(url);

    return this.http.delete<TypePlat>(url);
  }
  updateMenu(id: number, typeplat: TypePlat): Observable<TypePlat>{
    return this.http.put<TypePlat>(this.typeurl+ '/' + id , typeplat , this.httpOptions);
  }
}
