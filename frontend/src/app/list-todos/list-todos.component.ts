import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/data/task-service';
import { TaskComponent } from '../models/task/task.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  tasks: Array<TaskComponent>;
  messages: string;
  messageType: string;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.taskService.retrieveAllTasks().subscribe(
      response => {
        this.tasks = response;
      }
    );
  }

  editAction(id: number) {
    console.log(id);
    this.router.navigate(['tasks', id]);
  }

  deleteAction(id: number) {
    this.taskService.deleteAction(id).subscribe(
      response => {
        this.messageType = 'success';
        this.messages = `Successfully deleted task number ${id}.`;
        this.refreshTasks();
      },
      error => {
        this.messageType = 'danger';
        this.messages = 'There was an error while deleting the task...';
      }

    );
  }

}
