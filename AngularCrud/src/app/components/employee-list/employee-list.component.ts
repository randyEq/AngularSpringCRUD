import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
 
  employees?: Employee[];
  name = '';
  currentEmployee: Employee = {};
  currentIndex = -1;
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getAll()
    .subscribe({
      next: (data) => {
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void {
    this.currentEmployee = {};
    this.currentIndex = -1;
    console.log(this.name);
    this.employeeService.findByName(this.name)
    .subscribe({
      next: (data) => {
        this.employees = data;
        console.log(data);
      },
      error: (e) => console.log(e)
    });
  }

  setActiveEmployee(employee: Employee, index: number): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }

  removeAllEmployees(): void {
    this.employeeService.deleteAll()
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveEmployees();
    this.currentEmployee = {};
    this.currentIndex = -1;
  }

  test(): void {
    console.log('test');
  }
}
