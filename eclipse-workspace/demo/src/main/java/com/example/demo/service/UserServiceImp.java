/**
 * 
 */
package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

/**
 * @author soufianbesbiss
 *
 */
@Service
public class UserServiceImp implements UserService {
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<User> getUsers() {
		return userRepo.findAll();
	}

	@Override
	public User getUser(int id) {
		return userRepo.findOne(id);
	}

	@Override
	public User add(User user) {
		return userRepo.save(user);
	}

	@Override
	public User edit(User user) {
		return userRepo.save(user);
	}

	@Override
	public User delete(int id) {
		User user = userRepo.findOne(id);
		if (user != null) {
			userRepo.delete(user);
		}
		return user;
	}

		
	
}
