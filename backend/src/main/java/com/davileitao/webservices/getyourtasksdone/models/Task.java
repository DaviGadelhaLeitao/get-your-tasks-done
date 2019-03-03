package com.davileitao.webservices.getyourtasksdone.models;

public class Task {

	@Override
	public String toString() {
		return "Task [description=" + description + "]";
	}

	private String description;

	public Task(String description) {
		this.setDescription(description);
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
