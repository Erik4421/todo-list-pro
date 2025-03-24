package com.example.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.todolist.models.Task;
import com.example.todolist.models.User;
import com.example.todolist.service.TaskService;
import com.example.todolist.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class RouterController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserService userService;

    @GetMapping("/task")
    public List<Task> tasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/user")
    public List<User> users() {
        return userService.getAllUsers();
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User request) {

        String name = request.getName();
        String email = request.getEmail();
        String password = request.getPassword();

        User user = new User();
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);

        userService.createUser(user);

        String message = String.format("Usúario registrado com sucesso!");

        return ResponseEntity.ok(message);
    }
}
