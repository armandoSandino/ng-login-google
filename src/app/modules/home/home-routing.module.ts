import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { AuthGuardService as AuthGuard } from '@app/core/guards/auth-guard.services';
//import { AdminGuardService } from '@app/core/guards/admin.guard';
//import { NotFoundComponent } from '@app/components/not-found/not-found.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
    children:[
      /*
      {
        path: '', redirectTo: 'messenger', pathMatch: 'full'
      },
      {
        path: 'messenger',
        loadChildren: () =>
          import('@app/modules/messenger/messenger.module').then(
            (m) => m.MessengerModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@app/modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      */
    ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}