import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
// import { LoginComponent } from './modules/auth/pages/login/login.component';
// import { ResetPasswordComponent } from './modules/auth/pages/reset-password/reset-password.component';
import { NoAuthGuardService as NoAuthGuard} from './core/guards/not-guard.service';

const routes: Routes = [
  //{ path: 'login/reset-password', component: ResetPasswordComponent,canActivate:[NoAuthGuard] },
  { path: 'login', component: LoginComponent ,canActivate:[NoAuthGuard]},
  /*
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  */
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}