import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskComponent } from 'src/app/models/task/task.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTasks() {
    return this.http.get<TaskComponent>('http://localhost:8080/tasks');
  }
}
