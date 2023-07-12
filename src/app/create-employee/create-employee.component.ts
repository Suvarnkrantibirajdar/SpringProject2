import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { error } from 'console';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee:Employee=new Employee();

  constructor(private employeeService:EmployeeserviceService,
    private router:Router) { }

  ngOnInit(): void {
  }

saveEmployee()
{
this.employeeService.createEmployee(this.employee).subscribe(data=>{
  console.log(data);
  this.goToEmployeeList();

},
error=>console.log(error)
);
}

goToEmployeeList()
{
this.router.navigate(['/employees']);
}
  onSubmit()
  {
this.saveEmployee();
  }
}
