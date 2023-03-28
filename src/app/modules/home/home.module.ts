import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    //NgModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
