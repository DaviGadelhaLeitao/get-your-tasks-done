package com.davileitao.webservices.getyourtasksdone;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.davileitao.webservices.getyourtasksdone.models.Task;

@RestController
public class TestController {

	private List<Task> getTasks() {
		ArrayList<Task> tasks = new ArrayList<Task>();
		Task task1 = new Task(1L, "do a 5k run");
		Task task2 = new Task(2L, "beat your 5k time");
		Task task3 = new Task(3L, "rest well between training sessions");
		tasks.add(task1);
		tasks.add(task2);
		tasks.add(task3);

		return tasks;
	}

	@GetMapping("/hello")
	public String helloWorld() {
		return "Hello";
	}

	@GetMapping("/tasks")
	public List<Task> tasks() {
		return this.getTasks();
	}

	@RequestMapping("/task/{id}")
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
