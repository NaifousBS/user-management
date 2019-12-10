/**
 * 
 */
package com.example.demo;

import java.util.List;

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
