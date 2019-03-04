package com.davileitao.webservices.getyourtasksdone.models;

import java.time.LocalDateTime;

public class Task {

	private Long id;
	private String description;
	private LocalDateTime targetDate;
	private Boolean done;

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

	public LocalDateTime getTargetDate() {
		return targetDate;
	}

	public void setTargetDate(LocalDateTime targetDate) {
		this.targetDate = targetDate;
	}

	public Boolean getDone() {
		return done;
	}

	public void setDone(Boolean done) {
		this.done = done;
	}

}
