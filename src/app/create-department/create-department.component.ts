import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {


department:any;
  constructor(private employeeService:EmployeeserviceService) {
    this.department=new Department();
  
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.employeeService.createDepartment(this.department).subscribe(data=>{
      console.log(data);
      //this.goToEmployeeList();
    
    },
    error=>console.log(error)
    );
  }
}
