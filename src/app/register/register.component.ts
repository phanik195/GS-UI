import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';


import { EmployeeService } from "../service/employee.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registration: FormGroup;
  gender:any = "male";
  showMsg:Boolean= false;

  startDate = new Date(1998, 0, 1);

  constructor(private formBuilder:FormBuilder,
    private employeeService: EmployeeService,private datePipe:DatePipe) { }

  ngOnInit() {

    this.gender = "male";
    this.registration = this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      gender: [''],
      department: ['', Validators.required],
      dob:['',Validators.required]
    })
  }
  

  onSubmit(){
    console.log(this.registration.value);
    
    this.registration.value.dob = this.datePipe.transform(this.registration.value.dob,"yyyy-MM-dd");
      this.employeeService.saveEmploye(this.registration.value).subscribe(data =>{
        this.showMsg = true;
        this.registration.reset();
      },(error)=>{
        console.log("Error",error)
      });
  }

}
