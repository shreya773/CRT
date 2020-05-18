import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { NewsPageComponent } from './newsPage/newsPage.component';
import { aboutComponent } from './about/about.component';




const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  { path: 'newsPage', component: NewsPageComponent },
  { path: 'about', component: aboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
