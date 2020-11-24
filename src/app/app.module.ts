import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule,MatInputModule,MatTableModule,MatDatepickerModule,MatNativeDateModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';




import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmptyemployeelistComponent } from './emptyemployeelist/emptyemployeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WelcomeComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmptyemployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
