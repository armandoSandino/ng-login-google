import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAuthGuardService } from './guards/not-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { DownloadService } from './services/download/download.service';
import { AuthGuardService } from './guards/auth-guard.services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[
    AuthGuardService,
    NoAuthGuardService,
    DownloadService
  ]
})
export class CoreModule { }