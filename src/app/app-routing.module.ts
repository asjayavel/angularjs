import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CalenderpageComponent } from './calenderpage/calenderpage.component';
import { ComponentsComponent } from './components/components.component';
import { DropdownpageComponent } from './dropdownpage/dropdownpage.component';
import { FramepageComponent } from './framepage/framepage.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TablesAndLinksComponent } from './tables-and-links/tables-and-links.component';
import { TextareaComponent } from './textarea/textarea.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'calenderpage', component: CalenderpageComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'dropdownpage', component: DropdownpageComponent },
  { path: 'framespage', component: FramepageComponent },
  { path: 'sliders', component: SlidersComponent },
  { path: 'tablesAndLinks', component: TablesAndLinksComponent },
  { path: 'textarea', component: TextareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
