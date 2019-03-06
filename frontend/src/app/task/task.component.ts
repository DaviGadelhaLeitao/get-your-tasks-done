import { Component, OnInit, Injectable } from '@angular/core';
import { TaskService } from 'src/app/service/data/task-service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  id: number;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.task = new Task(1, '', false, new Date());
    this.taskService.retrieveTask('davi', this.id).subscribe(

      data => {
        console.log(data);
        this.task = data;
      }

    );
  }

  saveTask() {

  }

}
