import { Component, OnInit } from "@angular/core";
import { TaskService } from "../service/data/task-service";
import { Router } from "@angular/router";
import { Task } from "../models/Task";

@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  tasks: Array<Task>;
  messages: string;
  messageType: string;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.taskService.retrieveAllTasks().subscribe(response => {
      this.tasks = response;
    });
  }

  editAction(id: number) {
    console.log(id);
    this.router.navigate(["tasks", id]);
  }

  deleteAction(id: number) {
    this.taskService.deleteAction(id).subscribe(
      response => {
        this.messageType = "success";
        this.messages = `Successfully deleted task number ${id}.`;
        this.refreshTasks();
      },
      error => {
        this.messageType = "danger";
        this.messages = "There was an error while deleting the task...";
      }
    );
  }

  addTask() {
    this.router.navigate(["tasks", -1]);
  }
}
