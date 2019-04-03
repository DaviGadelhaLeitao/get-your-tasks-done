import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HardcodedAuthenticationService } from "../hardcoded-authentication.service";
import { Task } from "src/app/models/Task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(
    private http: HttpClient,
    private authService: HardcodedAuthenticationService
  ) {}

  retrieveAllTasks() {
    const username = this.authService.getLoggedUser();
    return this.http.get<Task[]>(
      `http://localhost:8080/users/${username}/tasks`
    );
  }

  retrieveTask(username: string, id: number) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    return this.http.get<Task>(
      `http://localhost:8080/users/${username}/tasks/${id}`,
      {headers} 
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'davi';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
  // first error before an addition of a header into the request:
  // Access to XMLHttpRequest at 'http://localhost:8080/users/davi/tasks'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.

  createTask(username: string, task: Task) {
    return this.http.post(
      `http://localhost:8080/users/${username}/tasks/`,
      task
    );
  }

  updateTask(username: string, id: number, task: Task) {
    return this.http.put(
      `http://localhost:8080/users/${username}/tasks/${id}`,
      task
    );
  }

  deleteAction(id: number) {
    const username = this.authService.getLoggedUser();
    return this.http.delete(
      `http://localhost:8080/users/${username}/tasks/${id}`
    );
  }
}
