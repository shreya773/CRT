import { Routes, RouterModule } from '@angular/router';
import { OrgSignupComponent } from './org-signup/org-signup.component';

const routes: Routes = [
  { path: 'org-signup', component: OrgSignupComponent },
];

export const MyRouteRoutes = RouterModule.forChild(routes);
