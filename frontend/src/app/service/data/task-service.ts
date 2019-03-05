import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskComponent } from 'src/app/models/task/task.component';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private authService: HardcodedAuthenticationService
  ) { }

  retrieveAllTasks() {
    const username = this.authService.getLoggedUser();
    return this.http.get<TaskComponent[]>(`http://localhost:8080/users/${username}/tasks`);
  }

  editAction(id: number) {
    // const username = this.authService.getLoggedUser();
    // return this.http.get

  }

  deleteAction(id: number) {
    const username = this.authService.getLoggedUser();
    return this.http.delete(`http://localhost:8080/users/${username}/tasks/${id}`)
  }
}
