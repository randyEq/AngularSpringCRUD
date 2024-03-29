import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AddEmployeeComponent} from './components/add-employee/add-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full'},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'employees/:id', component: EmployeeDetailsComponent}, 
  { path: 'add', component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
