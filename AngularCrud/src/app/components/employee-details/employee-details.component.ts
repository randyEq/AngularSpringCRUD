import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentEmployee: Employee = {
    name: '',
    department: '',
    active: false
  };

  message = '';

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    if (!this.viewMode) {
      this.message = '';
      this.getEmployee(this.route.snapshot.params["id"]);
    }
  }

  getEmployee(id: string): void {
    this.employeeService.get(id)
    .subscribe({
      next: (data) => {
        this.currentEmployee = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updateActive(status: boolean): void {
    const data = {
      name: this.currentEmployee.name,
      department: this.currentEmployee.department,
      avtive: status
    };

    this.message = '';

    this.employeeService.update(this.currentEmployee.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentEmployee.active = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateEmployee(): void {
    this.message = '';

    this.employeeService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This employee updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.currentEmployee.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/employees']);
        },
        error: (e) => console.error(e)
      });
  }
}
