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
  messageType;

  constructor(private taskService: TaskService) { }

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
    console.log(`Inside editAction for task number ${id}.`);
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
