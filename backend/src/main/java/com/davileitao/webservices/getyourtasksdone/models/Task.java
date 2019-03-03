package com.davileitao.webservices.getyourtasksdone.models;

public class Task {

	private Long id;
	private String description;

	public Task(Long id, String description) {
		this.setId(id);
		this.setDescription(description);
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return "Task [description=" + description + "]";
	}

}
