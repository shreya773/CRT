import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { NewsPageComponent } from './newsPage/newsPage.component';
import { AboutComponent } from './About/About.component';


const routes: Routes = [
  { path: 'newsPage', component: NewsPageComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
