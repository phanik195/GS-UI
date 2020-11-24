import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmptyemployeelistComponent } from './emptyemployeelist/emptyemployeelist.component';



const routes: Routes = [

  {path:'',component:WelcomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'employelist',component:EmployeeListComponent},
  {path:'emptylist',component:EmptyemployeelistComponent},
// wild card route
{ path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
