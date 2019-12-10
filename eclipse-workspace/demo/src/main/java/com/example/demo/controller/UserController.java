/**
 * 
 */
package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

/**
 * @author soufianbesbiss
 *
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/users"})
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping
	public List<User> getUsersList() {
		return userService.getUsers();
	}
	
	@GetMapping(path = {"/{id}"})
	public User getOneUser(@PathVariable("id") int id) {
		return userService.getUser(id);
	}
	
	@PostMapping
	public User addUser(@RequestBody User user) {
		user.setActive(true);
		return userService.add(user);
	}
	
	@PutMapping(path = {"/{id}"})
	public User editUser(@RequestBody User user, @PathVariable("id") int id) {
		user.setId(id);
		return userService.edit(user);
	}
	
	@DeleteMapping(path = {"/{id}"})
	public User deleteUser(@PathVariable("id") int id) {
		return userService.delete(id);
	}
	
	
}
