import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Params } from '@angular/router';
import { Assignment } from './assignment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private addEmp="http://localhost:8080/emp/addEmployee";
private getAllEmp="http://localhost:8080/emp/getAllEmployee";
private getAlldpm="http://localhost:8080/dpm/getAllDepartment";
private getEmpById="http://localhost:8080/emp/getEmployeeById";
private getdpmById="http://localhost:8080/dpm/getDepartmentById";
private updateEmployee="http://localhost:8080/emp/updateEmployee";
private updateDepartment="http://localhost:8080/dpm/updateDepartment";
private deleteEmployee="http://localhost:8080/emp/deleteEmployee";
private deleteDept="http://localhost:8080/dpm/delete/";
private saveDept="http://localhost:8080/dpm/addDepartment";
private assignment="http://localhost:8084/api/assignment";

  constructor(private httpClient:HttpClient) { }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.addEmp}`,employee);
  }
  getAllEmployeeList():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.getAllEmp}`);
  }
  getAllDeparmentList():Observable<Department[]>
  {
    return this.httpClient.get<Department[]>(`${this.getAlldpm}`);
  }
  getEmplyeeById(id:number):Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.getEmpById}/${id}`);
  }
  getDepartmentById(id:number):Observable<Department>
  {
    return this.httpClient.get<Department>(`${this.getdpmById}/${id}`);
  }


  updateEmployeeById(id:number,employee:Employee):Observable<Object>
  {
    return this.httpClient.put(`${this.updateEmployee}/${id}`,employee);
  }
  updateDepartmentById(id:number,department:Department):Observable<Object>
  {
    return this.httpClient.put(`${this.updateDepartment}/${id}`,department);
  }
  deleteEmployeeById(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.deleteEmployee}/${id}`);
  }
  deleteDepartmentById(id:any):Observable<any>
  {
     return this.httpClient.delete<any>(this.deleteDept+id);
  }
  createDepartment(department:Department):Observable<Object>{
    return this.httpClient.post(`${this.saveDept}`,department);
  }

  assignEmployee(empId:number,deptId:number):Observable<Params>
  {
    return this.httpClient.post(`${this.assignment}/${empId}/${deptId}`,Assignment);
  }
}
