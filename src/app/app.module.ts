import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialTableComponent } from './material-table/material-table.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MaterialHandlerModule } from './material-handler/material-handler.module';

import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterCaseManagerComponent } from './register-case-manager/register-case-manager.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent, 
    MaterialNavComponent, 
    MaterialTableComponent, 
    MaterialDashboardComponent, 
    LoginComponent, 
    RegisterCustomerComponent, 
    ForgetPasswordComponent, 
    DashboardComponent, 
    CustomerComponent, RegisterCaseManagerComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialHandlerModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
