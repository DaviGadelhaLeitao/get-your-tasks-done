import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    if (username == 'davi' && password == 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  getLoggedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers});
  }

}

export class AuthenticationBean {
  constructor(public message: string) {

  }
}
