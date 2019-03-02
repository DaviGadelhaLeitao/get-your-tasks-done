import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(1, 'Become an expert in Angular', false, new Date()),
    new Todo(1, 'It would be a nice thing to visit India', false, new Date())
  ]

  constructor() { }

  ngOnInit() {
  }

}