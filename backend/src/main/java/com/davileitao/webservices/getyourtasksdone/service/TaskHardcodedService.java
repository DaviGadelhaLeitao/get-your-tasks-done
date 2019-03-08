package com.davileitao.webservices.getyourtasksdone.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.davileitao.webservices.getyourtasksdone.models.Task;

@Service
public class TaskHardcodedService {
	
	private static List<Task> tasks = new ArrayList<Task>();
	private static int idCounter;
	
	static {
		tasks.add(new Task(++idCounter, "davi", "do a 5k run", new Date(), false));
		tasks.add(new Task(++idCounter, "davi", "beat your 5k time", new Date(), false));
		tasks.add(new Task(++idCounter, "davi", "rest well between training sessions", new Date(), false));
		tasks.add(new Task(++idCounter, "davi", "Learn Angular Framework", new Date(), false));
	}
	
	public List<Task> findAll() {
		return tasks;
	}
	
	public Task save(Task task) {
		// if it doesn't exist
		if (task.getId() == -1) {
			task.setId(++idCounter);
			tasks.add(task);
		} else {
			// updating a task
			deleteById(task.getId());
			tasks.add(task);
		}
		return task;
		
	}
	
	public Task deleteById(Integer id) {
		Task task = findById(id);
		
		if (task == null) return null;
		
		if (tasks.remove(task)) {
			return task;
		}
		
		return null;
	}

	public Task findById(Integer id) {
		for(Task task : tasks) {
			if (task.getId() == id) {
				return task;
			}
		}
		
		return null;
		
	}

}


























