import { Injectable } from '@angular/core';

import { ApiService } from "./api.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private apiService:ApiService) { }

  saveEmploye(employee:any): Observable<any>{
      return this.apiService.post('/create/employee',{ employee: employee })
      .pipe(data =>{
        return data;
      });
  }

  getEmployees():Observable<any>{
      return this.apiService.get('/employee/list').pipe(data =>{
        return data;
      });
  }

}
