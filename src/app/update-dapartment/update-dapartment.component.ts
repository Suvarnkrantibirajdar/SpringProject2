import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-dapartment',
  templateUrl: './update-dapartment.component.html',
  styleUrls: ['./update-dapartment.component.css']
})
export class UpdateDapartmentComponent implements OnInit {
department:any;
id!:any;
  constructor(private emplyeeService:EmployeeserviceService,private router:Router,private Activerouter:ActivatedRoute
    ) { 
    this.department=new Department();
  }

  ngOnInit(): void {
    this.id=this.Activerouter.snapshot.params['id'];
    this.emplyeeService.getDepartmentById(this.id).subscribe(data=>{
      this.department=data;
    },
    error=>console.log(error));
  }

  onSubmit() {
    this.emplyeeService.updateDepartmentById(this.id,this.department).subscribe(data=>{
      console.log(data);
      this.goTodepList();
    },
    error=>console.log(error));
  }

    goTodepList()
    {
      this.router.navigate(['/deparmentlist']);
    }

}
