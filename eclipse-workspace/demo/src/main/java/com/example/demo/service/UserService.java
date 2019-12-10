/**
 * 
 */
package com.example.demo.service;

import java.util.List;

import com.example.demo.model.User;

/**
 * @author soufianbesbiss
 *
 */
public interface UserService {

	List<User> getUsers();
	User getUser(int id);
	User add(User user);
	User edit(User user);
	User delete(int id);
	
}
