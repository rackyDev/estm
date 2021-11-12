import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import jwt_decode  from 'jwt-decode';
import {Injectable}  from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApi = environment.serviceApi;
  private decodeToken:any ;

  constructor(private http: HttpClient) { }

  login (user:{})
  {
    return this.http.post(`${this.urlApi}login`, user)
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  getRole(token : string)
  {
    this.decodeToken = jwt_decode(token);
    return this.decodeToken.roles;
  }


}
