/**
 * 
 */
package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

/**
 * @author soufianbesbiss
 *
 */
public interface UserRepository extends Repository<User, Integer> {

	List<User> findAll();
	User findOne(final int id);
	User save(User user);
	void delete(User user);
	
}
