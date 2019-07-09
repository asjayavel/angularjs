import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CalenderpageComponent } from './calenderpage/calenderpage.component';
import { ComponentsComponent } from './components/components.component';
import { DropdownpageComponent } from './dropdownpage/dropdownpage.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TablesAndLinksComponent } from './tables-and-links/tables-and-links.component';
import { SlidersComponent } from './sliders/sliders.component';
import { LandingComponent } from './landing/landing.component';
import { FramepageComponent } from './framepage/framepage.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AlertsComponent,
    CalenderpageComponent,
    ComponentsComponent,
    DropdownpageComponent,
    TextareaComponent,
    TablesAndLinksComponent,
    SlidersComponent,
    LandingComponent,
    FramepageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
