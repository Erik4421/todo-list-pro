package com.example.todolist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.todolist.models.Task;
import com.example.todolist.service.TaskService;


@Component
public class RunTest implements CommandLineRunner {

    @Autowired
    private TaskService taskService;

    @Override
    public void run(String... args) throws Exception {
        // Exibindo todas as pessoas registradas
		System.out.println("Pessoas registradas:");
		Iterable<Task> tasks = taskService.getAllTasks();
		for (Task task : tasks) {
			System.out.println("Task [id=" + task.getId() + ", title=" + task.getTitle() + ", description=" + task.getDescription() + ", status=" + task.getStatus() +  ", createdAt=" + task.getCreatedAt() + "]");
		}
    }
}
