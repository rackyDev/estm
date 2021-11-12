import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private urlApi = environment.serviceApi;
  constructor(private http : HttpClient) { }

  getUsers(): Observable<any[]>
  {
    return this.http.get<any[]>(`${this.urlApi}all`)
  }

  // getAllEtudiants(): Observable<any[]>
  // {
  //   return this.getUsers().pipe(
  //     map(apps => apps.filter(app => app.idRole == 1  )));
  // }
}


