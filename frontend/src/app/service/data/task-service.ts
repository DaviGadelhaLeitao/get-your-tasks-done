import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HardcodedAuthenticationService } from "../hardcoded-authentication.service";
import { Task } from "src/app/models/Task";
import { HttpInterceptorBasicAuthService } from '../http/http-interceptor-basic-auth.service';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(
    private http: HttpClient,
    private authService: HardcodedAuthenticationService,
    private httpInterceptor: HttpInterceptorBasicAuthService
  ) {}

  retrieveAllTasks() {
    const username = this.authService.getLoggedUser();
    return this.http.get<Task[]>(
      `${API_URL}/users/${username}/tasks`
    );
  }

  retrieveTask(username: string, id: number) {
    return this.http.get<Task>(
      `${API_URL}/users/${username}/tasks/${id}`
    );
  }

  // first error before an addition of a header into the request:
  // Access to XMLHttpRequest at 'http://localhost:8080/users/davi/tasks'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.

  createTask(username: string, task: Task) {
    return this.http.post(
      `${API_URL}/users/${username}/tasks/`,
      task
    );
  }

  updateTask(username: string, id: number, task: Task) {
    return this.http.put(
      `${API_URL}/users/${username}/tasks/${id}`,
      task
    );
  }

  deleteAction(id: number) {
    const username = this.authService.getLoggedUser();
    return this.http.delete(
      `${API_URL}/users/${username}/tasks/${id}`
    );
  }
}
