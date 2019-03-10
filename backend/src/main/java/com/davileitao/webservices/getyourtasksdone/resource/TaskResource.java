package com.davileitao.webservices.getyourtasksdone.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.davileitao.webservices.getyourtasksdone.models.Task;
import com.davileitao.webservices.getyourtasksdone.service.TaskHardcodedService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TaskResource {

	@Autowired
	private TaskHardcodedService taskService;

	@GetMapping("/users/{username}/tasks")
	public List<Task> getAllTasks(@PathVariable String username) {
		return taskService.findAll();
	}

	@GetMapping("/users/{username}/tasks/{id}")
	public Task getTask(@PathVariable String username, @PathVariable Integer id) {
		return taskService.findById(id);
	}

	@DeleteMapping("/users/{username}/tasks/{id}")
	public ResponseEntity<Void> deleteTask(@PathVariable String username, @PathVariable Integer id) {
		Task task = taskService.deleteById(id);

		if (task != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}

	@PutMapping("/users/{username}/tasks/{id}")
	public ResponseEntity<Task> updateTask(@PathVariable String username, @PathVariable Integer id,
			@RequestBody Task task) {

		Task updatedTask = taskService.save(task);
		return new ResponseEntity<Task>(updatedTask, HttpStatus.OK);
	}

	@PostMapping("/users/{username}/tasks")
	public ResponseEntity<Void> saveTask(@PathVariable String username, @RequestBody Task task) {
		Task savedTask = taskService.save(task);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/id").buildAndExpand(savedTask.getId())
				.toUri();

		ResponseEntity<Void> responseEntity = ResponseEntity.created(uri).build();

		return responseEntity;
	}

}
