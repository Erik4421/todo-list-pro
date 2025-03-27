package com.example.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.todolist.models.User;
import com.example.todolist.service.UserService;

@RestController
@RequestMapping(value = "api/rest/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> userList() {
        return userService.getAllUsers();
    }

}
