package com.davileitao.webservices.getyourtasksdone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.davileitao.webservices.getyourtasksdone.models.Task;

@RestController
public class TestController {
	
	@GetMapping("/hello")
	public String helloWorld() {
		return "Hello";
	}
	
	@GetMapping("/task")
	public Task task() {
		return new Task("Run 5k");
	}

}
