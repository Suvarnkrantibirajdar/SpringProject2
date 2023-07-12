import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { UpdateDapartmentComponent } from './update-dapartment/update-dapartment.component';


const routes: Routes = [
  {path:"create-employee", component:CreateEmployeeComponent},
  {path:"employees",component:EmployeelistComponent},
  {path:"update-employee/:id",component:UpdateEmployeeComponent},
  {path:"create-dept",component:CreateDepartmentComponent},
  {path:"departmentlist",component:DepartmentlistComponent},
  {path:"update-department/:id",component:UpdateDapartmentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
