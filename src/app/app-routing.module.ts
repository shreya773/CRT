import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { NewsPageComponent } from './newsPage/newsPage.component';
import { AboutComponent } from './About/About.component';
import { AlertwarningComponent } from './alertwarning/alertwarning.component';
import { PlanComponent } from './plan/plan.component';
import { SignInComponent } from './signIn/signIn.component';
import { DonationComponent } from './donation/donation.component';
import { MapsComponent } from './maps/maps.component';
import { OrgSignupComponent } from './signIn/org-signup/org-signup.component';
import { EmergencyComponent } from './emergency/emergency.component';



const routes: Routes = [
  { path: 'newsPage', component: NewsPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'alertwarning', component: AlertwarningComponent },
  { path: 'plan', component: PlanComponent},
  { path: 'signIn', component: SignInComponent},
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'donation', component: DonationComponent },
  { path: 'newsPage', component: NewsPageComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'org-signup', component: OrgSignupComponent},
  { path: 'emergency', component: EmergencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

