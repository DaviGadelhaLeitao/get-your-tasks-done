import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../service/data/task-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  username = "";

  ngOnInit() {

    this.username = this.route.snapshot.params['name'];
  }

  getTasks() {
    console.log(this.taskService.getTasks());
  }

}
