import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

employee:any;
  id!:any;

  constructor(private emplyeeService:EmployeeserviceService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
      this.employee=new Employee();
    }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.emplyeeService.getEmplyeeById(this.id).subscribe(data=>{
      this.employee=data;
    },
    error=>console.log(error));
  }

  onSubmit() {
    this.emplyeeService.updateEmployeeById(this.id,this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error=>console.log(error));
    }

    goToEmployeeList()
    {
      this.router.navigate(['/employees']);
    }
   
    
}
