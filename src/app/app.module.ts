import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialTableComponent } from './material-table/material-table.component';
import { RegisterComponent } from './register/register.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MaterialHandlerModule } from './material-handler/material-handler.module';

import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [AppComponent, MaterialNavComponent, MaterialTableComponent, MaterialDashboardComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialHandlerModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
