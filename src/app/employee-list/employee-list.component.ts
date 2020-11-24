import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../service/employee.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id','firstName', 'lastName', 'gender','department','dob'];

  data:any;
  constructor(private employeeService: EmployeeService,private route:Router) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(res =>{
      console.log(res);
      if(res.length <= 0){
          console.log("Employe list was empty");
          this.route.navigateByUrl('/emptylist');
      }
      this.data = res;
    },(error)=>{
      console.log("Error",error)
    });
  }
}
