import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared/shared.module';
import { HttpInterceptorService as HttpInterceptor } from './core/http/interceptor/http-interceptor.service';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //NgModule,
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    HttpClientModule,
    SharedModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '18283612379-lnuu28ntblsnp364to8tkq6n0hfhi4ed.apps.googleusercontent.com'
            )
          },
          /*
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
          */
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }