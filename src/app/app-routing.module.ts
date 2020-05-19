import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { NewsPageComponent } from './newsPage/newsPage.component';
import { AboutComponent } from './About/About.component';
import { AlertwarningComponent } from './alertwarning/alertwarning.component';
import { PlanComponent } from './plan/plan.component';
import { SignInComponent } from './signIn/signIn.component';



const routes: Routes = [
  { path: 'newsPage', component: NewsPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'homePage', component: HomePageComponent, pathMatch: 'full' },
  { path: 'Alertwarning', component: AlertwarningComponent },
  { path: 'plan', component: PlanComponent},
  { path: 'signIn', component: SignInComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
