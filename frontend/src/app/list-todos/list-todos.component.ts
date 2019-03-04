import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/data/task-service';
import { TaskComponent } from '../models/task/task.component';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  tasks: Array<TaskComponent>;
  messages;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.tasks = response;
  }

  handleErrorResponse(error) {
    this.messages = error.error.message;
  }

}
