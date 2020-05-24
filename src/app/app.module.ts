import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
      OrgSignupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
