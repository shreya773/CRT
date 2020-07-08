import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homePage/homePage.component';
import { PlanComponent } from './plan/plan.component';
import { NewsPageComponent } from './newsPage/newsPage.component';
import { SignInComponent } from './signIn/signIn.component';
import { AboutComponent } from './About/About.component';
import { AlertwarningComponent } from './alertwarning/alertwarning.component';
import { DonationComponent } from './donation/donation.component';
import { MapsComponent } from './maps/maps.component';
import { OrgSignupComponent } from './signIn/org-signup/org-signup.component';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { EmergencyComponent } from './emergency/emergency.component';
import { WeatherComponent } from './weather/weather.component';
import { FloodzoneComponent } from './floodzone/floodzone.component';


@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      PlanComponent,
      NewsPageComponent,
      SignInComponent,
      AboutComponent,
      AlertwarningComponent,
      DonationComponent,
      MapsComponent,
      OrgSignupComponent,
      EmergencyComponent,
      WeatherComponent,
      FloodzoneComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyAhyCdtQ7R3nCA25TNNJ_q6FYbDqWa8IeA'
       })
   ],

   providers : [],
   bootstrap: [
      AppComponent,
   ],
})
export class AppModule { }
