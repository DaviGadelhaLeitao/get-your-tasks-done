package com.davileitao.webservices.getyourtasksdone;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.davileitao.webservices.getyourtasksdone.models.Task;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TasksController {

	private List<Task> getTasks() {
		ArrayList<Task> tasks = new ArrayList<Task>();
		Task task1 = new Task(1L, "do a 5k run");
		Task task2 = new Task(2L, "beat your 5k time");
		Task task3 = new Task(3L, "rest well between training sessions");
		Task task4 = new Task(4L, "make a meal");
		tasks.add(task1);
		tasks.add(task2);
		tasks.add(task3);
		tasks.add(task4);

		return tasks;
	}

	@GetMapping("/tasks")
	public List<Task> tasks() {
		return this.getTasks();
	}

	@RequestMapping("/tasks/{id}")
	public Task task(@PathVariable Long id) {
		List<Task> tasks = this.getTasks();
		
		for(Task task : tasks) {
			if (task.getId() == id) {
				return task;
			}
		};
		return null;
	}

}
