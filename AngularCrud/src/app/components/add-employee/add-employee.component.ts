import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { error } from 'console';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    department: '',
    name: '',
    active: false
  };
  submitted = false;
  
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  saveEmployee(): void {
    const data = {
      department: this.employee.department,
      name: this.employee.name
    };

    this.employeeService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      department: '',
      name: '',
      active: false
    };
  }
  
}
