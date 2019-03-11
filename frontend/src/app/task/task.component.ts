import { Component, OnInit, Injectable } from "@angular/core";
import { TaskService } from "src/app/service/data/task-service";
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from "../models/Task";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  id: number;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    const username = sessionStorage.getItem("authenticatedUser");
    this.task = new Task(1, "", false, new Date());
    this.taskService.retrieveTask(username, this.id).subscribe(data => {
      this.task = data;
    });
  }

  saveTask() {
    const username = sessionStorage.getItem("authenticatedUser");
    this.taskService
      .updateTask(username, this.id, this.task)
      .subscribe(data => {
        this.router.navigate(["tasks"]);
      });
  }
}
