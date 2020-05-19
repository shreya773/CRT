import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homePage/homePage.component';
import { PlanComponent } from './plan/plan.component';
import { NewsPageComponent } from './newsPage/newsPage.component';
import { SignInComponent } from './signIn/signIn.component';
import { AboutComponent } from './About/About.component';
import { MapinformationComponent } from './mapinformation/mapinformation.component';
import { AlertwarningComponent } from './alertwarning/alertwarning.component';

@NgModule({
   declarations: [
      AppComponent,
      HomePageComponent,
      PlanComponent,
      NewsPageComponent,
      SignInComponent,
      AboutComponent,
      MapinformationComponent,
      AlertwarningComponent
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
