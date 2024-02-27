package com.bezkoder.spring.jpa.postgresql.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.jpa.postgresql.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
  List<Employee> findByActive(boolean active);

  List<Employee> findBynameContaining(String name);
}
