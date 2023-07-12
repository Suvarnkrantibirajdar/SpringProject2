import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  department:any;
  isDelete=false;
  message!:String;
  constructor(private employeeservice:EmployeeserviceService,private router:Router,private router1:ActivatedRoute) {
    this.department=new Department();
   }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  private getAllDepartment()
  {
    this.employeeservice.getAllDeparmentList().subscribe(data=>
      {
        this.department=data;
        console.log(data);
      })
  }

   updateDepatment(id:any)
   {
     this.router.navigate(['update-department',id]);
   }
  deleteDepartment(id:any)
  {
    this.employeeservice.deleteDepartmentById(id).subscribe(data=>{
      console.log(data);
  })
  }
}
