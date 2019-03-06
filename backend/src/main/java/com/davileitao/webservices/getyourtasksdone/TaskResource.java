package com.davileitao.webservices.getyourtasksdone;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.davileitao.webservices.getyourtasksdone.models.Task;
import com.davileitao.webservices.getyourtasksdone.service.TaskHardcodedService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
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
	


}
