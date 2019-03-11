import { HttpClient } from "@angular/common/http";
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
    return this.http.get<Task>(
      `http://localhost:8080/users/${username}/tasks/${id}`
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
